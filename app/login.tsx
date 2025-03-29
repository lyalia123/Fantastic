import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={require('@/assets/images/login-bg.png')} style={styles.background}>
      {/* Градиентный слой */}
      <LinearGradient colors={['transparent', 'rgba(0, 29, 0, 0.9)']} style={styles.gradient} />

      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#aaa" />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
          <Text style={styles.buttonText}>Sign In</Text>
          onPress={() => router.push('/(tabs)/index.tsx')}
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.registerLink}> Sign up</Text>
            onPress={() => router.push('/register')}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'relative',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    bottom: 0,
  },
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
    marginBottom: 8,
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#fff',
    fontSize: 14,
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
  registerContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  registerText: {
    color: '#ccc',
    fontSize: 14,
  },
  registerLink: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
