import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Inicial } from "../telas/Inicial"
import { Usuarios } from "../telas/Usuarios"
import {AmbientesEquipamentos} from "../telas/AmbientesEquipamentos"
import {Feather} from '@expo/vector-icons'


const { Navigator, Screen} = createBottomTabNavigator()

export function RotasTab(){
    return(
        <Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#ffff',
            tabBarInactiveTintColor: '#6c757d',
            tabBarStyle:{
                backgroundColor: '#560bad',
                borderTopColor: 0,
                paddingBottom: 14,
                paddingTop: 14
            }
            }}>

            <Screen
                name='inicial'
                component={Inicial}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather name="home" size={size} color={color}/>
                    )
                }}

            />

            <Screen
                name='usuarios'
                component={Usuarios}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather name="users" size={size} color={color}/>
                    )
                }}


            />

            
            <Screen
                name='ambiente'
                component={AmbientesEquipamentos}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather name="compass" size={size} color={color}/>
                    )
                }}


            />

        </Navigator>
    )
}


//<Navigator screenOptions={{headerShown: false}}> esse header show remove as barrinhas,
//tabBarShowLabel: false permite tiraar o texto e deixa apenas icones