import {View, Text, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";
import {Formulario} from "../componentes/Formulario";
import { Lista } from "../componentes/Lista";

export function Usuarios(){
    return(
        <View style={styles.container}>

            <Cabecalho titulo="Usuários"/>
            <Formulario/>
            <Lista/>

        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000' 
    },

});