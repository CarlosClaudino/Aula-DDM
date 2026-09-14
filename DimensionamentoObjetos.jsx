import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {{flex: '1', backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>

      <View style = {caixas.caixa1}>
       <Text> Caixa 1 </Text> 
      </View>

      <View style = {caixas.caixa2}>
        <Text> Caixa 2 </Text> 
      </View>

      <View style = {caixas.caixa3}>
       <Text> Caixa 3 </Text> </View>
      </View>
  );
}
  const caixas = StyleSheet.create({
    caixa1: {
      backgroundColor: 'pink',
      margin: 0,
      padding: 30,
      width: 150,
      height: 150
    },
    caixa2: {
      backgroundColor: 'purple',
      marginTop: 0,
      marginBottom: 30,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 5,
      paddingBottom: 5,
      width: '100%'
    },
    caixa3: {
      backgroundColor: 'yellow',
      margin: 0,
      padding: 0
    },
  })
