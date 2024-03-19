import { StyleSheet, View , Text} from "react-native"

// o nome da função que gera o componente tem que ser o mesmo do arquivo 
export const  Cabecalho = ({titulo, subtitulo}) => {
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>{titulo}</Text>
            { subtitulo?<Text style={estilos.texto}>{subtitulo}</Text>:null }
        </View>
    )
};

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#8338ec', 
        alignItems: 'center',
        padding: 15,
    },
    texto:{
        color: '#FFFF',
        fontSize: 24,
        fontWeight:"300"
    } 
});