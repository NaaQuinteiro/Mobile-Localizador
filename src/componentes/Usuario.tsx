// aqui será definido como o programa apresentará cada usuario individualmente 

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'


interface UsuarioProps {
    nome: string;
    email:string;
    telefone: string;
    usuario: string;
    senha: string;
    excluir: () => void;
}
export function Usuario({nome, email, telefone,usuario, senha, excluir} : UsuarioProps){
    return(
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text style={styles.texto}>Name: {nome}</Text>
                <Text style={styles.texto}>E-mail: {email}</Text>
                <Text style={styles.texto}>Phone Number: {telefone}</Text>
                <Text style={styles.texto}>User: {usuario}</Text>
                <Text style={styles.texto}>Password: {senha}</Text>
            </View>

            <TouchableOpacity 
                style={styles.botao}
                onPress={excluir}
            >
                <Text style={styles.textoBotao}>
                    <Feather
                        name="user-minus"
                        size={24}
                        color='#dee2e6'
                    />
                </Text>
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