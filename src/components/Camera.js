
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Camera} from "expo-camera";
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';


 export default function Component(){

    const [type, setType] = useState(Camera.Constants.Type.back);

    const [hasPermission, setHasPermission] = useState(null);

    useEffect(()=>{
        (async ()=> {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[]);

    try {
        if(hasPermission === null){
            return <View />;
        } 
        if(hasPermission === false){
            return <Text>Acesso negado!</Text>
        }
    } catch (error) {
        console.log('Deu erro' + error)
        
    }

    return (
        <View style={styles.container}>
           <Camera 
           style={{flex: 1}} type={type}
           />

           <TouchableOpacity>
            <View style={{height:60, alignItems: 'center', justifyContent: 'center', paddingTop: 8}}>
                <FontAwesome  name="camera" size={50}/>
                
            </View>

           </TouchableOpacity>
           <TouchableOpacity>
                <View style={{alignSelf: 'baseline', marginLeft: 10, marginBottom: 10}}>
                    <Text>Trocar</Text>
                </View>
           </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    }
});

