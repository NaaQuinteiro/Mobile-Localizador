//importando o react navigation
import { NavigationContainer } from '@react-navigation/native'
// importando a função oara executar a forma de navegação native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Importando a tela de login 
import {Login} from '../telas/Login'
import { Inicial } from '../telas/Inicial'

//necessário desestruturar certos elementos no createNativeStackNavigator 
const { Navigator, Screen } = createNativeStackNavigator()

export function RotasStack(){
    return(
        <NavigationContainer>

            <Navigator>

                <Screen
                    name='login'
                    component={Login}
                
                />

                <Screen
                    name='inicial'
                    component={Inicial}
                />

            </Navigator>
            
        </NavigationContainer>
    )
}

//O navigationContainer envolve o Navigator que envolve as telas, que no caso é o componente Screen
// Dentro de screen colocamos no nome o nome da tela mas é dentro do atriuto 
//component que realmente chamamos a tela desejada, no caso a login


// A rota usando o Stack possibilita decidir de tela em tela qual eu vou navegar
//ou seja definimos as rotas 