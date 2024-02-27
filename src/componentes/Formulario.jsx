import { useState } from "react";
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native"


export function Formulario(){
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    
    //onChange = executado a cada interação ou alteração dentro do input 
    //value = é a informação apresentada dentro do input, então qualaquer alteração feita no state é mostrada no input 
    //tudo que se altera no input altera o state e alterações no state afetão o input, isto é o componente controlado 
    //que está vinculado entre o state e oq há na tela

    // criando a função, armnazenando o conteudo do state dentro do obj js

    function adicionarUsuario(){
        let novoUsuario = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        console.log(novoUsuario)
    }

    return(
        <View style={styles.container}>

            <View style={styles.containerCampo}>
                <TextInput
                style={styles.campo}
                placeholder="Name"
                placeholderTextColor='#FFFF'
                keyboardType="default"
                onChangeText={setNome}
                value={nome}
                />

                <TextInput
                style={styles.campo}
                placeholder="Email"
                placeholderTextColor='#FFFF'
                keyboardType="email-adress"
                onChangeText={setEmail}
                value={email}
                />

                <TextInput
                style={styles.campo}
                placeholder="Phone Number"
                placeholderTextColor='#FFFF'
                keyboardType="phone-pad"
                onChangeText={setTelefone}
                value={telefone}
                />

            </View>
           
            <TouchableOpacity 
                style={styles.botao}
                onPress={adicionarUsuario}
            >
                <Text style={styles.texto}>+</Text>
            </TouchableOpacity>
            
        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical:10,
        marginVertical:10,
        // backgroundColor: "#FFFF"
    },
    containerCampo:{
        flex: 1
    },
    campo: {
        height: 50,
        backgroundColor: '#560bad',
        color: '#FFFF',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5, 
        fontSize: 16
    },
    botao: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        height: 170, 
        backgroundColor: '#560bad',
        marginStart: 10,
        borderRadius: 5, 
        marginVertical: 5
    }, 
    texto: {
        color: '#FFFF',
        fontSize: 25
    }

});