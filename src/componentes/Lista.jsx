import {View,Text, StyleSheet, FlatList} from "react-native"
import { Usuario } from "./Usuario"


export function Lista(){

    const listaUsuarios = [
        {
        codigo: '1',
        nome: 'Marcelo',
        email: 'marcelo@email.com',
        telefone: '(19) 99999-9999'
        },
        {
            codigo: '2',
            nome: 'Marlene',
            email: 'marlene@email.com',
            telefone: '(19) 88888-8888'
        },

        {
            codigo: '3',
            nome: 'Ricardo',
            email: 'ricardo@email.com',
            telefone: '(19) 77777-7777'
        },

        {
            codigo: '4',
            nome: 'Marcelo',
            email: 'marcelo@email.com',
            telefone: '(19) 99999-9999'
            },
            {
                codigo: '5',
                nome: 'Marlene',
                email: 'marlene@email.com',
                telefone: '(19) 88888-8888'
            },
    
            {
                codigo: '6',
                nome: 'Ricardo',
                email: 'ricardo@email.com',
                telefone: '(19) 77777-7777'
            },
    
    ]
    

    return(
        <View >
            <FlatList
                data={listaUsuarios}
                keyExtractor={(item) => {item.codigo}}
                renderItem={({item}) => (
                    <Usuario
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                    />
                ) }
            />
        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    texto: {
        color: '#ffff',
        paddingTop: 24
    },

});