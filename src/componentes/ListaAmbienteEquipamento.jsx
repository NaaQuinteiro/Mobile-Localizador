import {View,Text, StyleSheet, FlatList} from "react-native"
import { AmbienteEquipamento } from "./AmbienteEquipamento"

export const ListaAmbienteEquipamento = ({colecao, remover}) =>{

    return(
        <View style={styles.conteiner}>
            <FlatList
                data = {colecao}
                keyExtractor={item => item.codigo}
                renderItem={({item}) => (
                    <AmbienteEquipamento
                        descricao = {item.descricao}
                        latitude = {item.latitude}
                        longitude = {item.longitude}
                        statusOperacional = {item.statusOperacional}
                        instrucoesSeguranca = {item.instrucoesSeguranca}
                        contatoResponsavel = {item.contatoResponsavel}
                        excluir ={() => remover(item.codigo)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.texto}>
                        Nenhum ambiente e equipamento armazenado.
                    </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    texto: {
        color: '#ffff',
        paddingTop: 24,
        textAlign:'center'
    },

});