import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const CollapsableTextView = ({
  isCollapsed,
  onPress,
  title,
  description,
  containerStyle
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className={`justify-between flex-row items-center pb-1 ${containerStyle} ${
          isCollapsed ? "" : "border-b"
        }`}
      >
        <Text className="font-pregular text-sm text-title">{title}</Text>
        <Ionicons
          name={isCollapsed ? "chevron-up" : "chevron-down"}
          size={24}
          color={"#000000"}
        />
      </TouchableOpacity>
      {isCollapsed && (
        <View className="pb-2 border-b border-labelText">
          <Text className="font-pregular text-xs text-labelText">
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CollapsableTextView;
