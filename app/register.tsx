import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';


export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Здесь будет логика регистрации
    console.log('Регистрация:', { name, email, password });
  };

  return (
    <ImageBackground source={require('../assets/images/login-bg.png')} style={styles.background}>
      {/* Градиентный слой */}
      <LinearGradient colors={['transparent', 'rgba(0, 29, 0, 0.9)']} style={styles.gradient} />
      
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Enter your details to register</Text>
  
        <TextInput
          placeholder="Имя"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
  
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
  
        <TextInput
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
  
        <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
            <Text style={styles.buttonText}>Registration</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.3)',
    color: '#fff',
    marginBottom: 12,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    width: '100%',
    backgroundColor: '#1D3D47',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
