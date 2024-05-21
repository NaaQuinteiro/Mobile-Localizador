
import {StyleSheet, View } from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";
import { useEffect, useRef, useState } from "react";

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
                        longitude: location.coords.longitude,
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

});