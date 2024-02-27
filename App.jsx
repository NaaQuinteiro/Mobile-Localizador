import { StyleSheet, StatusBar, View } from 'react-native';
import { Usuarios } from './src/telas/Usuarios';
import {Inicial} from './src/telas/Inicial'; //importando a tela incial 


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Usuarios/>
    </View>
  );
}

// onde inicia o style do seu componente 
const styles = StyleSheet.create({
  //componente que você cria para armazenar o seu css
  container: {
    flex: 1, //ocupa todo o espaço disponível 
  },
});
