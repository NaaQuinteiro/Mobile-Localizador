import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";



export function Sobre(){

    return(
        <View style={styles.container}>
            <Cabecalho titulo={"Sobre"}/>
            <Text style={styles.texto}>Essas tags TEXT é sópra não ficar vazio =D</Text>
            <Text></Text>
            <Text style={styles.texto}>I'm on the highway to hell</Text>
            <Text style={styles.texto}>On the highway to hell</Text>
            <Text style={styles.texto}>Highway to hell</Text>
            <Text style={styles.texto}>I'm on the Highway to hell</Text>
            <Text></Text>
            <Text style={styles.texto}>by: ACDC</Text>
        </View>
        
    )
}

//Estilização
const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#000'
    },
    texto:{
        color: '#FFF',
        fontSize: 21,
    }

});