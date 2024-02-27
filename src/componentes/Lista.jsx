import {View,Text, StyleSheet} from "react-native"


export function Lista(){
    return(
        <View >
            <Text style={styles.texto}>Lista</Text>
        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    texto: {
        color: '#ffff',
        paddingTop: 24
    },

});