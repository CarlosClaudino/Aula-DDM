# Aula-DDM
import {Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1, allingItems: 'center', justifyContent: 'center'}}>
      <Image sorce={ require('./assets/snack-icon.png')}
      style={{ width: 120, weight: 150}}
      />

      <Text> Insira o e-mail abaixo: </Text>
      <TextInput placeholder='seu e-mail'
      style={{
        borderWidth: 1,
        borderRadius: 3,
        margin: 20,
        padding: 5,
        color: '#a0a0a0'
      }}/>

      <Text> Insira a senha abaixo: </Text>
      <TextInput placeholder='senha'
      keyboardType='numeric'
      secureTextEntry={true}
      style={{
        borderWidth: 1,
        borderRadius: 3,
        margin: 20,
        padding: 5,
        color: '#a0a0a0'
      }}/>
    </View>
  );
}
