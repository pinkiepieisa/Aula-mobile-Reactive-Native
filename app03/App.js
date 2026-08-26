import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, Image } from 'react-native';
import styles from './styles';


export default function App() {
  const [dist, setD] = useState('');
  const [temp, setT] = useState('');
  const [velocidade, setVelo] = useState('');
  const [resultados, setResults] = useState([]);
  // Inícia tudo vazio
  // Velocidade vai receber o resultado final

  const calcular = () => {
    const d = parseFloat(dist);
    const t = parseFloat(temp);

    if (isNaN(d) || isNaN(t) || t === 0) {
      setVelo('Entrada inválida!');
      return;
    }

    const resultado = d / t;
    setVelo(resultado);

    setResults((results) => [...results, { id: Date.now().toString(),
      distancia: dist,
      tempo: temp,
      velocidade: resultado
    }]);
  };

  const deleteRes = (id) => {
    setResults((results) => results.filter((item) => item.id !== id));
  };

  const renderRes = ({ item }) => (
    <View>
      <Text style={styles.historico}>Distância: {item.distancia}</Text>
      <Text style={styles.historico}>Tempo: {item.tempo}</Text>
      <Text style={styles.historico}>Velocidade: {item.velocidade}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonDel} onPress={() => deleteRes(item.id)}>
          <Text style={styles.buttonText}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <View>
        <Image source={{ uri: 'https://i.pinimg.com/736x/39/49/40/394940c098db830b8ac47b5a67c4fa8b.jpg' }} style={styles.image} />
        <Text style={styles.title}> Descubra a velocidade média! 🚀 </Text>
      </View>

      <View>
        <TextInput 
        style={styles.input} 
        placeholder="Digite a distância:" 
        keyboardType="numeric" 
        value={dist} 
        onChangeText={(text) => setD(text)} 
        />

        <TextInput 
          style={styles.input} 
          placeholder="Digite o tempo:" 
          keyboardType="numeric" 
          value={temp} 
          onChangeText={(text) => setT(text)} 
        />

        <Pressable style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText} > Calcular </Text>
        </Pressable>

        <Text style={styles.resultado} >{velocidade}</Text>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.subtitle}> Histórico: </Text>

        {resultados.length === 0 ? (
        <Text style={styles.noListText}> Nenhum cálculo feito! </Text>
        ) : (
        <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={renderRes}
        />
        )}
      </View>
    </View>
  );
}


