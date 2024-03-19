import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";
import { useState } from "react";



export function Cadastro(){

    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    console.log(nome)
    console.log(usuario)
    console.log(senha)

    return(
        <View style={styles.container}>
            <Cabecalho titulo={"Cadastro"}/>

            <View style={styles.containerCadastro}>

                <TextInput
                style={styles.campo}
                placeholder="Nome"
                placeholderTextColor='#FFFF'
                keyboardType="default"
                onChangeText={setNome}
                value={nome}
                />

                <TextInput
                style={styles.campo}
                placeholder="Usuário"
                placeholderTextColor='#FFFF'
                keyboardType="default"
                onChangeText={setUsuario}
                value={usuario}
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
                    <Text style={styles.textoBtn}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </View>
        
    )
}

//Estilização
const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#000',
    },

    containerCadastro: {
        flex: 1,
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
        padding: 10
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