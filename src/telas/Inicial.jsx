//AQUI FICA A FUNÇÃO PARA GERAR O COMPONENTE (TELAS)

//importando os componentes, todos os componentes que usamos é preciso importál-os 
import { ImageBackground, StyleSheet, View } from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";
import{ Botao } from "../componentes/Botao"

export function Inicial(){
    return(
        <View style={styles.container}> 
            <Cabecalho 
                titulo="HOME"
            />  

            <ImageBackground
                style={styles.fundo}
                source={require('../../assets/mapa.png')}
            > 

                <Botao texto='Teste '/>
                <Botao texto='Teste '/>
                <Botao texto='Teste '/>
                <Botao texto='Teste '/>

            </ImageBackground>     

        </View>
    );
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000' 
    },

    fundo: {
       flex: 1,
       flexDirection: 'row',
       flexWrap: 'wrap',
       resizeMode: 'cover',
    },

});