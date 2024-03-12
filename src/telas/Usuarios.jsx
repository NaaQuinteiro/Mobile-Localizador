import {View, Text, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";
import {Formulario} from "../componentes/Formulario";
import { Lista } from "../componentes/Lista";
import { useState } from "react";

import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'

export function Usuarios(){

    const [listaUsuarios, setListaUsuarios] = useState([]);

    //função pra inserir usuarios  // criando a função, que deve interajir com o componente formulario
    function adicionarUsuario(nome, email, telefone){

        let novoUsuario = {
            codigo: uuid(),
            nome: nome,
            email: email,
            telefone: telefone
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

            <Cabecalho titulo="Usuários"/>

            <Formulario adicionar={adicionarUsuario}/>

            <Lista 
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