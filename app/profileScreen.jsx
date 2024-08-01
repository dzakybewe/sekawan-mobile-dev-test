import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as React from "react";
import CollapsableTextView from "../components/collapsableTextView";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileScreen = () => {
  const [isEducationCollapsed, setEducationCollapsed] = React.useState(false);
  const [isSkillsCollapsed, setSkillsCollapsed] = React.useState(false);
  const [isPortfolioCollapsed, setPorfolioCollapsed] = React.useState(false);

  return (
    <ScrollView className="bg-white h-full pt-[20px] px-4">
      <View className="w-full items-center">
        <Image
          className="border h-[200px] w-[200px] rounded-[100px]"
          source={require("../assets/images/fotobewe.jpg")}
        />
        <Text className="mt-5 text-black font-psemibold text-lg">
          Dzaky Ahmadin Berkah Wardana
        </Text>
      </View>

      <Text className="mt-1 text-black font-pregular text-justify text-xs">
        I am passionate in mobile development with experience in Flutter and
        Kotlin Jetpack Compose. I graduated from the Bangkit Academy 2024
        Program in Android Learning Path, where I honed my skills and developed
        a strong foundation in mobile app development. {"\n\n"}With this test
        opportunity from Sekawan Media, I'm tackling my first project using
        React Native, which has been a challenging yet fun experience. My
        enthusiasm for creating intuitive and user-friendly applications drives
        me to continuously learn and innovate in the field.
      </Text>

      <CollapsableTextView
        title={"Education Background"}
        description={
          "Final year Informatics Student at Brawijaya University (3.70/4.00)"
        }
        onPress={() => setEducationCollapsed(!isEducationCollapsed)}
        isCollapsed={isEducationCollapsed}
        containerStyle={"mt-4"}
      />

      <CollapsableTextView
        title={"Related Skills"}
        description={
          "Android Development, Mobile App Development, Flutter, Kotlin, Jetpack Compose"
        }
        onPress={() => setSkillsCollapsed(!isSkillsCollapsed)}
        isCollapsed={isSkillsCollapsed}
        containerStyle={"mt-3"}
      />

      <TouchableOpacity
        onPress={() => setPorfolioCollapsed(!isPortfolioCollapsed)}
        className={`justify-between flex-row items-center mt-3 pb-1 ${
          isPortfolioCollapsed ? "" : "border-b"
        }`}
      >
        <Text className="font-pregular text-sm text-title">Portfolio</Text>
        <Ionicons
          name={isPortfolioCollapsed ? "chevron-up" : "chevron-down"}
          size={24}
          color={"#000000"}
        />
      </TouchableOpacity>
      {isPortfolioCollapsed && (
        <View className="pb-2 border-b border-labelText">
          <Text
            className="font-pregular text-xs text-blue-600"
            onPress={() => Linking.openURL("https://github.com/dzakybewe/")}
          >
            Github: github.com/dzakybewe
          </Text>
          <Text
            className="pt-2 font-pregular text-xs text-primary"
            onPress={() => Linking.openURL("https://bit.ly/DzakyABWPortfolio")}
          >
            Portfolio: bit.ly/DzakyABWPortfolio
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ProfileScreen;
