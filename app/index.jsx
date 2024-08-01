import React from "react";
import { ImageBackground, Text, View } from "react-native";
import CustomButton from "../components/customButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground className="flex-1 justify-between py-5 px-4" source={require('../assets/images/onboarding-image.png')} resizeMode="cover">
        {/* Text Element */}
        <View className="flex-1 justify-center ">
          <Text className="text-4xl mb-2 font-psemibolditalic text-primary">Shopsky</Text>
          <Text className="text-secondary font-pbold text-3xl">Your One Stop {"\n"}Shopping Solution</Text>
        </View>

        <CustomButton
          containerStyle={"mb-5 w-full"}
          title={"Start Shopping"}
          onPress={() => router.replace("/homeScreen")}
          isLoading={false}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
