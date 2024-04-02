import {View, Text, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";
import {FormularioUsuario} from "../componentes/FormularioUsuario";
import { ListaUsuario } from "../componentes/ListaUsuario";
import { useState } from "react";
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'

export function Usuarios(){

    const [listaUsuarios, setListaUsuarios] = useState([]);

    //função pra inserir usuarios  // criando a função, que deve interajir com o componente formulario
    function adicionarUsuario(nome, email, telefone, usuario, senha){

        let novoUsuario = {
            codigo: uuid.v4(),
            nome: nome,
            email: email,
            telefone: telefone,
            usuario: usuario,
            senha: senha
        }

        //insere o novo objeto
        setListaUsuarios([...listaUsuarios, novoUsuario])
    }

    //Função pra remover usuarios
    const removerUsuario = codigo => {

        setListaUsuarios(
            listaUsuarios.filter(usuario => usuario.codigo !== codigo)
        )

    }
    

    return(
        <View style={styles.container}>

            <Cabecalho titulo="Cadastro de Usuários"/>

            <FormularioUsuario adicionar={adicionarUsuario}/>

            <ListaUsuario 
                colecao={listaUsuarios}
                remover={removerUsuario}
            />

        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000' 
    },

});