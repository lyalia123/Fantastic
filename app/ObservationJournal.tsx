import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Batch = {
  id: string;
  name: string;
  date: string;
  image: any;
};

type RootStackParamList = {
  BatchDetails: { batch: Batch };
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'BatchDetails'>;

const ObservationJournal: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  // Пример списка партий микрозелени
  const batches: Batch[] = [
    { id: '1', name: 'Wheatgrass Batch', date: '2025-03-29', image: require('@/assets/images/batch1.png') },
    { id: '2', name: 'Sunflower Batch', date: '2025-03-28', image: require('@/assets/images/batch1.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Observation Journal</Text>
      <FlatList
        data={batches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.batchCard} 
            onPress={() => navigation.navigate('BatchDetails', { batch: item })}
          >
            <Image source={item.image} style={styles.batchImage} />
            <View style={styles.batchInfo}>
              <Text style={styles.batchTitle}>{item.name}</Text>
              <Text style={styles.batchDate}>Started: {item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  batchCard: { flexDirection: 'row', backgroundColor: '#FFF', padding: 10, borderRadius: 12, marginBottom: 10, alignItems: 'center' },
  batchImage: { width: 60, height: 60, borderRadius: 10 },
  batchInfo: { marginLeft: 10 },
  batchTitle: { fontSize: 16, fontWeight: 'bold' },
  batchDate: { fontSize: 12, color: '#888' },
});

export default ObservationJournal;