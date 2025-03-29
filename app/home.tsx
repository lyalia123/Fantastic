import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  // Данные для горизонтального списка
  const smallPlants = [
    { id: '1', name: 'Cactus Red', image: require('@/assets/images/cactus.png') },
    { id: '2', name: 'Bonsai Green', image: require('@/assets/images/bonsai.png') },
  ];

  // Данные для вертикального списка (детальные карточки)
  const bigPlants = [
    { id: '1', name: 'Cactus Red', subtitle: 'Create an Apod', image: require('@/assets/images/big-plant.png') },
    { id: '2', name: 'Cactus Red', subtitle: 'Create an Apod', image: require('@/assets/images/big-plant.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Верхняя часть с аватаркой */}
      <View style={styles.header}>
        <Text style={styles.title}>
          My <Text style={styles.greenText}>Garden</Text>
        </Text>
        <Image source={require('@/assets/images/avatar.png')} style={styles.avatar} />
      </View>

     {/* Иконки категорий */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Ionicons name="water-outline" size={24} color="#4F8A4E" />
          <Text style={styles.categoryText}>Water</Text>
        </TouchableOpacity>

        {/* Кнопка "Add", которая ведет на экран регистрации партии */}
        <TouchableOpacity 
          style={styles.categoryButton} 
          onPress={() => navigation.navigate('RegisterBatch')}
        >
          <Ionicons name="add-circle-outline" size={24} color="#4F8A4E" />
          <Text style={styles.categoryText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity 
  style={styles.categoryButton} 
  onPress={() => navigation.navigate('ObservationJournal')}
>
  <Ionicons name="leaf-outline" size={24} color="#4F8A4E" />
  <Text style={styles.categoryText}>Plants</Text>
</TouchableOpacity>

      </View>

      {/* Секция "My Plants" (горизонтальный скролл) */}
      <Text style={styles.sectionTitle}>My Plants</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {smallPlants.map((item) => (
          <View key={item.id} style={styles.plantCard}>
            <Image source={item.image} style={styles.plantImage} />
            <Text style={styles.plantName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
        
      {/* Секция "Details" (вертикальный список) */}
      <Text style={styles.sectionTitle}>Details</Text>
      <FlatList
        data={bigPlants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.plantDetailCard} 
            onPress={() => navigation.navigate('PlantDetail', { plant: item })}
          >
            <Image source={item.image} style={styles.plantDetailImage} />
            <View style={styles.plantInfo}>
              <Text style={styles.plantTitle}>{item.name}</Text>
              <Text style={styles.plantSubtitle}>{item.subtitle}</Text>
              <Text style={styles.waterLevelText}>Water Level</Text>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Нижняя панель навигации */}
      <View style={styles.bottomNav}>
        {['home-outline', 'book-outline', 'scan-outline', 'people-outline', 'settings-outline'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.navButton}>
            <Ionicons name={icon} size={24} color={index === 0 ? '#4F8A4E' : '#aaa'} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// Стили
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', paddingHorizontal: 20, paddingTop: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold' },
  greenText: { color: '#4F8A4E' },
  avatar: { width: 40, height: 40, borderRadius: 20 },

  // Категории (Вода, Свет, Растения)
  categories: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15 },
  categoryButton: { alignItems: 'center', padding: 10, backgroundColor: '#FFF', borderRadius: 12 },
  categoryText: { fontSize: 12, marginTop: 5 },

  // Заголовки секций
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 10 },

  // Горизонтальный список растений
  horizontalScroll: { flexDirection: 'row', marginBottom: 5 },
  plantCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 12, 
    padding: 10, 
    marginRight: 10, 
    width: 120, 
    height: 150, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  plantImage: { width: 80, height: 80, borderRadius: 10 },
  plantName: { textAlign: 'center', marginTop: 5, fontSize: 14 },

  // Вертикальный список (подробные карточки)
  plantDetailCard: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF', 
    borderRadius: 12, 
    padding: 10, 
    alignItems: 'center', 
    height: 100, 
    width: '100%', 
    marginBottom: 10
  },
  plantDetailImage: { width: 90, height: 90, borderRadius: 10 }, 
  plantInfo: { marginLeft: 10, flex: 1 },
  plantTitle: { fontSize: 16, fontWeight: 'bold' },
  plantSubtitle: { fontSize: 12, color: '#888' },
  waterLevelText: { fontSize: 12, color: '#4F8A4E', marginTop: 5 },

  // Индикатор воды
  progressBar: { width: '100%', height: 5, backgroundColor: '#E0E0E0', borderRadius: 5, marginTop: 5 },
  progressFill: { width: '50%', height: '100%', backgroundColor: '#4F8A4E', borderRadius: 5 },

  // Нижняя навигация
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15, backgroundColor: '#FFF', borderRadius: 20 },
  navButton: { padding: 10 },
});

