import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = () => {
return (
    <View className="items-center justify-center flex-1 h-screen bg-black">
        <Text className="items-center justify-center flex-1 h-screen bg-black">
            Details Screen
        </Text>
        <StatusBar style="auto" />
    </View>
    );
};

export default DetailScreen;