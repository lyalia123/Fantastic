import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const microgreens = [
  { id: '1', name: 'Базилик', image: require('../assets/images/basil.png'), description: 'Ароматное растение для кулинарии.', humidity: '60%', height: '30 см', temperature: '20°C' },
  { id: '2', name: 'Редис', image: require('../assets/images/radish.png'), description: 'Острые и сочные ростки.', humidity: '55%', height: '25 см', temperature: '18°C' },
  { id: '3', name: 'Горох', image: require('../assets/images/pea.png'), description: 'Сладкие и нежные ростки.', humidity: '70%', height: '35 см', temperature: '22°C' },
  { id: '4', name: 'Подсолнух', image: require('../assets/images/sunflower.png'), description: 'Плотные и хрустящие ростки.', humidity: '50%', height: '40 см', temperature: '21°C' },
  { id: '5', name: 'Кресс-салат', image: require('../assets/images/cress.png'), description: 'Пряные ростки с горчичным вкусом.', humidity: '65%', height: '20 см', temperature: '19°C' },
];

export default function MicrogreensLibrary() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Библиотека микрозелени</Text>
      <FlatList
        data={microgreens}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('InfoScreen', { plant: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#4F8A4E' },
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    margin: 10,
    alignItems: 'center',
    flex: 1,
    elevation: 3,
  },
  image: { width: 100, height: 100, borderRadius: 10 },
  name: { fontSize: 16, marginTop: 8 },
});

