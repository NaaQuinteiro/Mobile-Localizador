// aqui será definido como o programa apresentará cada ambiente e equipamento individualmente 
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const AmbienteEquipamento = ({descricao, latitude, longitude, statusOperacional, instrucoesSeguranca, contatoResponsavel, excluir }) =>{
    return(
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text style={styles.texto}>Descrição: {descricao}</Text>
                <Text style={styles.texto}>Latitude: {latitude}</Text>
                <Text style={styles.texto}>Longitude: {longitude}</Text>
                <Text style={styles.texto}>Status Operacional: {statusOperacional}</Text>
                <Text style={styles.texto}>Instruções de Segurança: {instrucoesSeguranca}</Text>
                <Text style={styles.texto}>Contato do Responsável: {contatoResponsavel}</Text>
            </View>

            <TouchableOpacity 
                style={styles.botao}
                onPress={excluir}
            >
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