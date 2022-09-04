import { Text,View, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Header() {
  return (
    <View style={styles.container} >
        <StatusBar style='dark' />
      
        <Image style={styles.logo} resizeMode='contain' source={require('../../assets/react_native_logo.png')} />
        <Text style={styles.title} >Armazenamento local com React native</Text>
   
        
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    minHeight: '20%',
    paddingTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  title:{
    color: '#fff'
  },
  logo:{
    width: 90,
    height: 90,
    display: 'flex'
  }
})


