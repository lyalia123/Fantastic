import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

// Определяем типы данных
interface Batch {
  id: string;
  name: string;
  date: string;
  image: any;
}

interface Observation {
  id: string;
  date: string;
  text: string;
  image: string | null;
}

interface RouteParams {
  batch: Batch;
}

export default function BatchDetails() {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { batch } = route.params;

  const [observations, setObservations] = useState<Observation[]>([
    { id: '1', date: '2025-03-29', text: 'Watered the plants today.', image: null },
  ]);

  const [newEntry, setNewEntry] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Функция выбора изображения
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // Добавление новой записи
  const addObservation = () => {
    if (newEntry.trim() !== '') {
      const newRecord: Observation = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        text: newEntry,
        image: selectedImage,
      };
      setObservations([newRecord, ...observations]);
      setNewEntry('');
      setSelectedImage(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{batch.name} - Details</Text>

      <FlatList
        data={observations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.observationCard}>
            {item.image && <Image source={{ uri: item.image }} style={styles.observationImage} />}
            <Text style={styles.observationText}>{item.text}</Text>
            <Text style={styles.observationDate}>{item.date}</Text>
          </View>
        )}
      />

      {/* Форма для добавления записи */}
      <TextInput
        style={styles.input}
        placeholder="Enter observation..."
        value={newEntry}
        onChangeText={setNewEntry}
      />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.previewImage} />}
      
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={addObservation}>
        <Text style={styles.buttonText}>Add Entry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  observationCard: { backgroundColor: '#FFF', padding: 10, borderRadius: 12, marginBottom: 10 },
  observationText: { fontSize: 14 },
  observationDate: { fontSize: 12, color: '#888', marginTop: 5 },
  observationImage: { width: '100%', height: 150, borderRadius: 10, marginTop: 10 },
  input: { backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginBottom: 10 },
  button: { backgroundColor: '#4F8A4E', padding: 10, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#FFF', fontSize: 16 },
  previewImage: { width: 100, height: 100, borderRadius: 8, marginBottom: 10 },
});