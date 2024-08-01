import { router, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="homeScreen"
        options={{
          title: "Explore",
          headerShown: true,
          headerTitleAlign: "center",
          headerRight: () => (
            <View className="mr-3">
              <Ionicons
                name="person-circle-outline"
                size={32}
                onPress={() => {
                  router.push("/profileScreen");
                }}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="detailScreen"
        options={{
          title: "",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="profileScreen"
        options={{
          title: "Profile",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
