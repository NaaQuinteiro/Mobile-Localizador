
import {StyleSheet, View} from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";
import { useEffect, useRef, useState } from "react";
import {MaterialIcons,FontAwesome5, MaterialCommunityIcons, Feather  } from '@expo/vector-icons'

// Biblioteca para o usuario permitir acesso a localização 
// obtém a localização do usuario 
import { 
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync, //observa a posição
    LocationAccuracy

 } from 'expo-location';

 import MapView, { Marker} from "react-native-maps";


export function Inicial(){

    const [location, setLocation] = useState<LocationObject | null>(null);

    const mapRef = useRef<MapView>(null);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition); // salva a região inicial do usuario no mapa
        }
    }

    //executa assim que a tela é reinderizada
    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response)=> {
            setLocation(response);

            mapRef.current?.animateCamera({
                pitch: 70,
                center: response.coords
            });
        });
    }, []);

    // let [regiao, setRegiao] = useState({
    //     latitude: -22.9140,
    //     longitude: ,
    //     latitudeDelta: 0.005,
    //     longitudeDelta: 0.005
    // })

    return(
        <View style={styles.container}> 
            <Cabecalho 
                titulo="HOME"
            />  
            
            { 
                location && 
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude:location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                    />

                    <Marker coordinate={{latitude: -22.9141396, longitude: -47.0681575}}>
                        <View style={styles.marcadorContainer}>
                            <FontAwesome5 
                                name="temperature-high" 
                                size={24} 
                                color="rgb(67, 97, 238)" />
                        </View>
                    </Marker>

                    <Marker coordinate={{latitude: -22.9141236, longitude:  -47.0681981}}>
                        <View style={styles.marcadorContainer}>
                            <MaterialIcons 
                                name="sensors" 
                                size={20} 
                                color="rgb(67, 97, 238)"
                            />
                        </View>
                    </Marker>

                    <Marker coordinate={{latitude: -22.914252, longitude:  -47.068253}}>
                        <View style={styles.marcadorContainer}>
                            <Feather
                                name="sun" 
                                size={20} 
                                color="rgb(67, 97, 238)"
                            />
                        </View>
                    </Marker>

                    <Marker coordinate={{latitude: -22.914868, longitude:  -47.068379}}>
                        <View style={styles.marcadorContainer}>
                            <MaterialCommunityIcons
                                name="counter" 
                                size={20} 
                                color="rgb(67, 97, 238)"
                            />
                        </View>
                    </Marker>

                </MapView>

            }

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

    map: {
       flex: 1,
       width: '100%',
    },

    marcadorContainer: {
        width: 50,
        height:50,
        // backgroundColor: 'rgb(67, 97, 238)',
        flexDirection: 'column',
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },

});