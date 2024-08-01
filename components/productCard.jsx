import { View, Text, Image, TouchableOpacity } from "react-native";
import * as React from "react";

const ProductCard = ({ item, onPress }) => {

  return (
    <TouchableOpacity
      className="w-[165px] bg-[#FCFCFC] border border-[#DEDEDE] m-2 justify-center"
      onPress={onPress}
    >
      <View className="h-[220px] w-full">
        <Image
          className="h-[220px] bg-background"
          source={{ uri: item.thumbnail }}
          resizeMode="contain"
        />
      </View>

      <Text className="text-title font-pmedium text-start pt-1 px-2">
        {item.brand}
      </Text>

      <Text className="text-labelText font-plight text-start px-2">
        {item.title}
      </Text>

      <Text className="text-primary font-pregular text-start px-2 pb-1">
        ${item.price}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
