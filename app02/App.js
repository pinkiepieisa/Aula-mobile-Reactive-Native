import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native'; 

export default function App() {
  const [ladoA, setA] = useState(''); 
  const [ladoB, setB] = useState(''); 
  const [resultado, setResultado] = useState(''); 
 
  const calcular = () => { 
    const a = parseFloat(ladoA); 
    const b = parseFloat(ladoB); 
 
    if (isNaN(a) || isNaN(b)) { 
      setResultado('Entrada inválida!'); 
      return; 
    }
      
    setResultado( b * a );
    
  }; 
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pinimg.com/736x/35/cf/9f/35cf9f1bfd9f4b46d361ef26b49c5dd5.jpg'}} style={styles.image} />
      <Text style={styles.titulo}>Área de um retângulo! 🖍️</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Digite o 1º número:" 
        keyboardType="numeric" 
        value={ladoA} 
        onChangeText={(text) => setA(text)}
      /> 

      <TextInput 
        style={styles.input} 
        placeholder="Digite o 2º número:" 
        keyboardType="numeric" 
        value={ladoB} 
        onChangeText={(text) => setB(text)}
      /> 

      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.button} onPress={calcular}> 
          <Text style={styles.buttonText}>Calcular</Text> 
        </TouchableOpacity>  
      </View> 

      <Text style={styles.resultado}>{resultado}</Text> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff45e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { 
    width: 330, 
    height: 500,  
    marginBottom: 20, 
  }, 
  input: {
    width: '80%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginVertical: 10, 
    borderRadius: 5, 
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 20,
  },
  resultado: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333',
  },
  buttonContainer: { 
    width: '18%', 
  },
  button: { 
    backgroundColor: '#724caf', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fdfdfd', 
    fontWeight: 'bold', 
  },  
});
