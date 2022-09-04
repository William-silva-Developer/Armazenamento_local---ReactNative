import { View, SafeAreaView, StyleSheet} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Form from '../components/Form';

import Header from '../components/Header';




export default function Home() {
  return (
    <SafeAreaView>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <View >
            <Header />
        </View>
        <View>
          <Form />
        </View>
        
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    height: '100%',
    marginTop: '6%'
  }
})


