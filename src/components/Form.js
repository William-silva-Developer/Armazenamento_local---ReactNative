import { TextInput, StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from "react-native";
import {  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import { useState } from "react";

import { useNavigation } from "@react-navigation/native";



import BD from '@react-native-async-storage/async-storage';



export default function Form({props:user}){
   
    const navigation = useNavigation();
  
    const [name, setNome] = useState([]);
    const [email, setEmail] = useState([]);

 

    

   //MÉTODO PARA ARMAZENAR
    async function Store(){
        const usuario = {
            name,
            email,
            
        };
         BD.setItem('usuario', JSON.stringify(usuario));
         setNome('');
         setEmail('');

    };

    //MÉTODO PARA BUSCAR
    async function Search(){
        try {
            const data = await BD.getItem('usuario');
            const user =  JSON.parse(data);

            setNome(user);
           Alert.alert('Informações do usuário', 
           `Nome: ${user.name} - Email: ${user.email}`
           );
           console.log(user)

           
        } catch (error) {
            console.log('FALHOU! '+ error);
            
        }
    };


    
    

    return(
       
           
            

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior='position' enabled>
                    
                        <TextInput
                            style={styles.input}
                            onChangeText={setNome}
                            value={name}
                            placeholder="Digite seu nome"
                            />

                        <TextInput 
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Exemplo@email.com"
                        
                        />

                        <View style={styles.buttom}>   
                            <TouchableOpacity onPress={Store}>
                                <Text style={styles.btn} >Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Search}>
                                <Text style={styles.btn}>Mostrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate('Camera')}  >
                                <Text style={styles.btn}>Camera</Text>
                            </TouchableOpacity>
                        </View>
                        

                    </KeyboardAvoidingView>
                </View>
               
                
            </TouchableWithoutFeedback>
       
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#00ffff",
        height: '100%',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        paddingTop: 50
        

    },
   
    input: {
      height: 35,
      margin: 4,
      marginTop: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      
    },
    btn: {
        backgroundColor: '#333333',
        alignSelf: 'center',
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingBottom: '1%',
        paddingTop: '1%',
        borderRadius: 10,
        color: '#fff',
        
        
    },
    buttom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12
    
    }
    
  });