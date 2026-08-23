import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Primeiro App!</Text>
      <Text style={styles.texto2}> Aplicativos Mobile || 📱</Text>
      <Text style={styles.texto3}>Feito com Reactive Native! 🌐</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb0dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto1: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  texto2: {
    fontSize: 20,
    padding: 5
  },
  texto3: {
    fontSize: 20,
    padding: 5,
    fontStyle: 'italic',
    color: '#9e9e9e'
  }
});
