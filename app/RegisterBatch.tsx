import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export default function RegisterBatchScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [comments, setComments] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register New Batch</Text>

      <Text style={styles.label}>Name of Microgreens</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter name..." 
        value={name} 
        onChangeText={setName} 
      />

      <Text style={styles.label}>Seeding Date</Text>
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text>{date.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker 
          value={date} 
          mode="date" 
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }} 
        />
      )}

      <Text style={styles.label}>Comments</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        placeholder="Enter comments..." 
        value={comments} 
        onChangeText={setComments} 
        multiline 
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F8F8' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginBottom: 10 },
  textArea: { height: 80 },
  button: { backgroundColor: '#4F8A4E', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
