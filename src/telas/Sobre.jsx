import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";



export function Sobre(){

    return(
        <View style={styles.container}>
            <Cabecalho titulo="Sobre" />
        </View>
        
    )
}

//Estilização
const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#000'
    },
});