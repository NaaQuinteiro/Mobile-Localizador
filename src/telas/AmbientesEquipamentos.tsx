import {View, Text, StyleSheet} from "react-native"
import { Cabecalho } from "../componentes/Cabecalho";
import {ListaAmbienteEquipamento} from "../componentes/ListaAmbienteEquipamento"
import {FormularioAmbienteEquipamento} from "../componentes/FormularioAmbienteEquipamento"
import { useState } from "react";
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'


interface AmbienteEquipamentoProps{
    codigo: string;
    descricao: string;
    latitude: string;
    longitude: string;
    statusOperacional: string;
    instrucoesSeguranca: string;
    contatoResponsavel: string;
}

export function AmbientesEquipamentos(){

    const[listaAmbiEqui, setListaAmbiEqui] = useState<AmbienteEquipamentoProps[]>([])

    function adicionarAmbiente(descricao:string, latitude: string, longitude:string, statusOperacional:string, instrucoesSeguranca:string, contatoResponsavel: string){

        let novoAmbiente : AmbienteEquipamentoProps = {
            codigo: String(uuid.v4()),
            descricao: descricao,
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
    const removerAmbiente = (codigo : String) =>{

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