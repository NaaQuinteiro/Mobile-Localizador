// aqui será definido como o programa apresentará cada usuario individualmente 

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export function Usuario({nome, email, telefone}){
    return(
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text style={styles.texto}>{nome}</Text>
                <Text style={styles.texto}>{email}</Text>
                <Text style={styles.texto}>{telefone}</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        marginVertical:7,
        paddingHorizontal: 15,
    },
    containerDados:{
        flex: 1,
        backgroundColor: '#ffff',
        borderRadius: 5,
        padding:10,
    },
    
    botao: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#560bad',
        marginStart: 10,
        borderRadius: 5, 
        borderRadius: 5,
    }, 
    texto: {
        color: '#000',
        fontSize: 15,

    },
    textoBotao:{
        fontSize:26,
        color: '#FFFF'
    }

});