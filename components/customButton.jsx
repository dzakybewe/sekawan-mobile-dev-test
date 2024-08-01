import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress, isLoading, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[54px] flex flex-row justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={"text-white font-pmedium text-lg"}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
