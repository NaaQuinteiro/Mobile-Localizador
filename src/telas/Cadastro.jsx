import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";
import { useState } from "react";
import uuid from 'react-native-uuid'
import { FormularioUsuario } from "../componentes/FormularioUsuario";



export function Cadastro(){

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    
    
    const adicionarUsuario = (nome, email, telefone, usuario, senha) => {

        setCodigo(uuid.v4())
        setNome(nome)
        setEmail(email)
        setTelefone(telefone)
        setUsuario(usuario)
        setSenha(senha)
    }

    return(
        <View style={styles.container}>
            <Cabecalho titulo={"Cadastro"}/>

            <View style={styles.conteinerCadastro}>
                <FormularioUsuario 
                    adicionar={adicionarUsuario}
                />  
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