import { useState } from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import {useNavigation} from '@react-navigation/native'

export function Login(){

    //useState = armazrena os dados inseridos nos inputs
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation()

    // função
    function abrirInicial(){
        navigation.navigate('inicial')

    }

    return(
        <View style={styles.container}>
           
            <TextInput
                style={styles.campo}
                placeholder='Usuário' 
                placeholderTextColor='#e1e5f2'
                onChangeText={setUsuario}
                value={usuario}
            />

            <TextInput
                style={styles.campo}
                placeholder='Senha'
                placeholderTextColor='#e1e5f2'
                keyboardType='default'
                onChangeText={setSenha}
                value={senha}     
            />
    
            <TouchableOpacity style={styles.botao} onPress={abrirInicial}>
                <Text style={styles.textoBtn}>Sigin</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cadastro} >
                <Text style={styles.textoCadastro}>Cadastre-se</Text>
            </TouchableOpacity>  
            
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
    cadastro: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textoCadastro:{
        color: '#fff',
        fontSize: 15,
    }
    

});