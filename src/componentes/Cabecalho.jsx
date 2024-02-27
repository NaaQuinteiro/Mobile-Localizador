import { StyleSheet, View , Text} from "react-native"

// o nome da função que gera o componente tem que ser o mesmo do arquivo 
export const  Cabecalho = ({titulo, subtitulo}) => {
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>{titulo}</Text>
            <Text style={estilos.texto}>{subtitulo}</Text>
        </View>
    )
};

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#8338ec', 
        alignItems: 'center'
    },
    texto:{
        color: '#FFFF',
        fontSize: 24,
        fontWeight:"300"
    } 
});