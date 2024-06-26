import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
const HomeScreen = ({navigator }:any) => {
  return (
    <View className="items-center justify-center flex-1 h-screen bg-black">
      <Button mode='contained' onPress={() => navigator.navigate('Detail') }>
        Go to details!
      </Button>
    </View>
  )
}

export default HomeScreen