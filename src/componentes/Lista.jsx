import {View,Text, StyleSheet, FlatList} from "react-native"
import { Usuario } from "./Usuario"


export function Lista({colecao, remover}){
    

    return(
        <View >
            <FlatList
                data={colecao}
                keyExtractor={item => item.codigo}
                renderItem={({item}) => (
                    <Usuario
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                        remover={() =>remover(item.codigo)} 
                    />
                ) }
                ListEmptyComponent={() => (
                    <Text style={styles.texto}>
                        Nenhum usuário foi cadastrado
                    </Text>
                )}
            />
        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    texto: {
        color: '#ffff',
        paddingTop: 24,
        textAlign:'center'
    },

});