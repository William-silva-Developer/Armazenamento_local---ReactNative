
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';

import Camera from '../components/Camera';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (

    <NavigationContainer>

        <Stack.Navigator initialRouteName="Usuario">
            <Stack.Screen name="Home" component={Home} options={{
              headerShown: false,
            }} />

         
        <Stack.Screen name="Camera" component={Camera} options={{
          headerShown: false,
        }} /> 

       
           
        </Stack.Navigator>

    </NavigationContainer>
  );
}