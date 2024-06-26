import {View,Text, StyleSheet, FlatList} from "react-native"
import { Usuario } from "./Usuario"

interface UsuarioProps {
    codigo: string;
    nome: string;
    email:string;
    telefone: string;
    usuario: string;
    senha: string;
}

interface ListaUsuarioProps{
    colecao: UsuarioProps[]
    remover: (codigo: string) => void;
}

export function ListaUsuario({colecao, remover}: ListaUsuarioProps){
    

    return(
        <View style={styles.conteiner}>
            <FlatList
                data={colecao}
                keyExtractor={item => item.codigo}
                renderItem={({item}) => (
                    <Usuario
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                        usuario={item.usuario}
                        senha={item.senha}
                        excluir={() =>remover(item.codigo)} 
                    />
                ) }
                ListEmptyComponent={() => (
                    <Text style={styles.texto}>
                        Nenhum usuário armazenado.
                    </Text>
                )}
            />
        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
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