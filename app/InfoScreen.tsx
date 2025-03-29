import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

export default function PlantDetailScreen() {
  const route = useRoute();
  const { plant } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={plant.image} style={styles.image} />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{plant.name}</Text>
        <Text style={styles.subtitle}>{plant.subtitle}</Text>
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{plant.description}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Ionicons name="water-outline" size={20} color="#4F8A4E" />
            <Text style={styles.infoText}>Humidity</Text>
            <Text style={styles.infoValue}>{plant.humidity}%</Text>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="leaf-outline" size={20} color="#4F8A4E" />
            <Text style={styles.infoText}>Height</Text>
            <Text style={styles.infoValue}>{plant.height}</Text>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="thermometer-outline" size={20} color="#4F8A4E" />
            <Text style={styles.infoText}>Temperature</Text>
            <Text style={styles.infoValue}>{plant.temperature}°C</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  image: { width: '100%', height: 300, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  detailsContainer: { padding: 20, backgroundColor: '#FFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#4F8A4E' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  description: { fontSize: 14, color: '#555', marginTop: 5, lineHeight: 20 },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  infoBox: { alignItems: 'center', backgroundColor: '#F0F0F0', padding: 15, borderRadius: 12, width: '30%' },
  infoText: { fontSize: 12, color: '#666' },
  infoValue: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
});
