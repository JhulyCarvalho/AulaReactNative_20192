import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text> Olá, Mundo! </Text>
      <Pacote/>
    </View>
  );
}

class Pacote extends Component{
  render(){
    return(
      <Text> Seja bem vindo ao React-Native! </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
