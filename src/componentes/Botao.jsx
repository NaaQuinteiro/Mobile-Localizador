import { StyleSheet, TouchableOpacity, Text} from "react-native"

import { useState } from 'react'
// o props é um objeto que permite termos acesso a tpodas as propriedades passadas para o componente 
export const Botao = ({texto}) => {
    // usando o state, os dois parametros funcionam como get e setter, e no 
    //parenteses do useState coloca-se o valor onde ele vai iniciar
    const [cliques, setCliques] = useState(0)

    //funçaõ que contará quantos cliques foram dados no botão 
    const contarCliques = () =>{
       setCliques(cliques + 1)
        
    }

    return(
        // envolve todos os componentes, podendo ser usado como botão
        <TouchableOpacity 
            style={estilos.container}
            onPress={contarCliques} //vincula o evento quando o botao é pressionado
        >
            <Text style={estilos.texto}>{texto}{cliques}</Text>
        </TouchableOpacity>
    )
}


// Estilização
const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#8338ec',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 150,
        marginTop: 24,
        marginStart: 24,
        borderRadius: 12,
        border: '#8338ec',
        borderWidth: 1
    },
    texto: {
        color: '#FFFF',
        fontSize:20,

    }
});