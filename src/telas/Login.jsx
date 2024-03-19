import { useState } from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"

export function Login(){

    //useState = armazrena os dados inseridos nos inputs
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    console.log(nome)
    console.log(senha)

    return(
        <View style={styles.container}>
           
            <TextInput
            style={styles.campo}
            placeholder="Usuário"
            placeholderTextColor='#FFFF'
            keyboardType="default"
            onChangeText={setNome}
            value={nome}
            />

            <TextInput
            style={styles.campo}
            placeholder="Senha"
            placeholderTextColor='#FFFF'
            keyboardType="default"
            onChangeText={setSenha}
            value={senha}
            />
    
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBtn}>Sigin</Text>
            </TouchableOpacity>
            
            <Text style={styles.texto}>Cadastre-se!</Text>
            
        </View>
        
    )
}

//Estilização
const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#000',
        justifyContent:'center',
        alignItems: 'center'
    },

    campo: {
        width: 350,
        height: 50,
        backgroundColor: '#560bad',
        color: '#FFFF',
        marginVertical: 7,
        padding: 10,
        borderRadius: 5, 
        fontSize: 16
    },
    containerBtn: {
        justifyContent:'center',

    },
    botao: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: '#7209b7',
        borderRadius: 5,
        padding: 7
        // marginStart: 155 

    }, 
    textoBtn: {
        color: '#FFFF',
        fontSize: 15
    },
    texto:{
        color: '#fff',
        fontSize: 15,
    }
    

});