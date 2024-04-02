import { useState } from "react";
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native"

export function FormularioAmbienteEquipamento({adicionar}){
    
    const [descricao, setDescricao] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [statusOperacional, setStatusOperacional] = useState('')
    const [instrucoesSeguranca, setInstrucoesSeguranca] = useState('')
    const [contatoResponsavel, setContatoResponsavel] = useState('')

    return(
        <View style={styles.container}>

        <View style={styles.containerCampo}>
            <TextInput
                style={styles.campo}
                placeholder="Descrição"
                placeholderTextColor='#FFFF'
                keyboardType="default"
                onChangeText={setDescricao}
                value={descricao}
            />

            <TextInput
                style={styles.campo}
                placeholder="Latitude"
                placeholderTextColor='#FFFF'
                keyboardType="phone-pad"
                onChangeText={setLatitude}
                value={latitude}
            />

            <TextInput
                style={styles.campo}
                placeholder="Longitude"
                placeholderTextColor='#FFFF'
                keyboardType="phone-pad"
                onChangeText={setLongitude}
                value={longitude}
            />

            <TextInput
                style={styles.campo}
                placeholder="Status Operacional"
                placeholderTextColor='#FFFF'
                keyboardType="default"
                onChangeText={setStatusOperacional}
                value={statusOperacional}
            />

            <TextInput 
                style={styles.campo}
                placeholder='Instruções de Segurança'
                placeholderTextColor='#fff'
                keyboardType='default'                
                onChangeText={setInstrucoesSeguranca}
                value={instrucoesSeguranca}
            /> 

            <TextInput 
                style={styles.campo}
                placeholder='Contato do Responsável'
                placeholderTextColor='#FFFF'
                keyboardType="phone-pad"
                onChangeText={setContatoResponsavel}
                value={contatoResponsavel}
            />  

        </View>
       
        <TouchableOpacity 
            style={styles.botao}
            onPress={ () => adicionar(descricao, latitude, longitude, statusOperacional, instrucoesSeguranca, contatoResponsavel)}
        >
            <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
        
    </View>
    )                    
}

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
        height: 350,
        marginStart: 10,
        justifyContent: 'center',
        alignItems: 'center',
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