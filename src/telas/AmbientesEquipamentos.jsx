import {View, Text, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";
import {ListaAmbienteEquipamento} from "../componentes/ListaAmbienteEquipamento"
import {FormularioAmbienteEquipamento} from "../componentes/FormularioAmbienteEquipamento"
import { useState } from "react";
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'

export function AmbientesEquipamentos(){

    const[listaAmbiEqui, setListaAmbiEqui] = useState([])

    function adicionarAmbiente(latitude, longitude, statusOperacional, instrucoesSeguranca, contatoResponsavel){

        let novoAmbiente = {
            codigo: uuid.v4(),
            latitude: latitude,
            longitude: longitude,
            statusOperacional: statusOperacional,
            instrucoesSeguranca: instrucoesSeguranca,
            contatoResponsavel: contatoResponsavel
        }
        //insere o novo objeto
        setListaAmbiEqui([...listaAmbiEqui, novoAmbiente])
    }

    //Função pra remover ambientes
    const removerAmbiente = codigo =>{

        setListaAmbiEqui(
            listaAmbiEqui.filter(ambiente => ambiente.codigo !== codigo)
        )
    }

    return(
        <View style={styles.container}>

            <Cabecalho titulo="Cadastro de Ambientes e Equipamentos"/>

            <FormularioAmbienteEquipamento adicionar={adicionarAmbiente}/>

            <ListaAmbienteEquipamento
                colecao={listaAmbiEqui}
                remover={removerAmbiente}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000' 
    },

});