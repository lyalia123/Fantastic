import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PlantDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params;

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerText}>New on <Text style={styles.brand}>Plantio</Text></Text>
        <Ionicons name="settings-outline" size={24} color="#4F8A4E" />
      </View>
      
      {/* Изображение растения */}
      <Image source={plant.image} style={styles.plantImage} />
      
      {/* Описание */}
      <Text style={styles.description}>{plant.description}</Text>
      
      {/* Уровень воды */}
      <View style={styles.waterContainer}>
        <Ionicons name="water-outline" size={16} color="#4F8A4E" />
        <Text style={styles.waterText}>150 ml</Text>
      </View>
      
      {/* Кнопка "Полить растение" */}
      <TouchableOpacity style={styles.waterButton}>
        <Ionicons name="water" size={24} color="#FFF" />
        <Text style={styles.waterButtonText}>WATER PLANT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 20, alignItems: 'center' },
  header: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  brand: { color: '#4F8A4E' },
  plantImage: { width: 200, height: 200, marginVertical: 20 },
  description: { fontSize: 14, color: '#666', textAlign: 'center', marginHorizontal: 10 },
  waterContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
  waterText: { fontSize: 14, color: '#4F8A4E', marginLeft: 5 },
  waterButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#4F8A4E', padding: 12, borderRadius: 20, marginTop: 20 },
  waterButtonText: { color: '#FFF', fontSize: 16, marginLeft: 10 }
});