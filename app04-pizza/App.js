import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default function App() {
  const [pizzas, setValor] = useState([
    { sabor: 'Queijo', value: 30},
    { sabor: '4 Queijos', value: 45},
    { sabor: 'Marguerita', value: 35},
    { sabor: 'Frango', value: 30},
    { sabor: 'Chocolate', value: 40},
    { sabor: 'Romeu e Julieta', value: 30}
  ]);
  const [open, setOpen] = useState(false);
  const [resultado, setResultado] = useState('');
  const [opcoes, setOpcoes] = useState(null);

  const sabores = () => {
    let res = 0;

        if (opcoes === sabor) res = value;
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text>Pizzaria: 🍕</Text>
      </View>

      <View>
        <Text>Sabor da pizza: 🧀</Text>

        <View>
          <DropDownPicker 
            open={open} items={pizzas} value={opcoes} setValue={setOpcoes} setOpen={setOpen} 
            setItems={setValor}
            placeholder='Escolha o sabor da pizza:'
            containerStyle={{ marginBottom: 10}}
          />
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
