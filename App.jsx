import { StyleSheet, StatusBar, View } from 'react-native';
import {Inicial} from './src/telas/Inicial'; //importando a tela incial 
import { Login } from './src/telas/Login';
import { Cadastro } from './src/telas/Cadastro';
import { Sobre } from './src/telas/Sobre';
import { Usuarios } from './src/telas/Usuarios';
import { AmbientesEquipamentos } from './src/telas/AmbientesEquipamentos';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <AmbientesEquipamentos/>
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
