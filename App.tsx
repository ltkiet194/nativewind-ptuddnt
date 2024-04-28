import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from '@/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home/HomeScreen';
import DetailScreen from './src/screens/home/DetailScreen';
import CustomNavigationBar from './src/navigation/CustomNavigationBar';

const Stack = createStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
                          screenOptions={{ 
                            header: (props) => <CustomNavigationBar {...props} />,
                            }}>
          <Stack.Screen name="Home" component= {HomeScreen} />
          <Stack.Screen name="Detail" component= {DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
      
  );
}

