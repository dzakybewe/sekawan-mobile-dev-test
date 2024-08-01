import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as React from "react";
import { getDetailProduct, getProductsByCategory } from "../data/api";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

import ProductCard from "../components/productCard";
import CustomButton from "../components/customButton";
import CollapsableTextView from "../components/collapsableTextView";

const DetailScreen = () => {
  const { productId } = useLocalSearchParams();
  const [detail, setDetail] = React.useState([]);
  const [recommendations, setRecommendations] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isDescriptionCollapsed, setDescriptionCollapsed] =
    React.useState(true);
  const [isShippingCollapsed, setShippingCollapsed] = React.useState(false);
  const [isWarrantyCollapsed, setWarrantyCollapsed] = React.useState(false);

  React.useEffect(() => {
    const fetchDetail = async () => {
      try {
        const product = await getDetailProduct(productId);
        setDetail(product);

        if (detail.category != null) {
          const recommendations = await getProductsByCategory(
            detail.category,
            4
          );
          setRecommendations(recommendations.products);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [productId]);

  React.useEffect(() => {
    if (detail.category != null) {
      const fetchRecommendations = async () => {
        try {
          const recommendations = await getProductsByCategory(
            detail.category,
            4
          );
          setRecommendations(recommendations.products);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchRecommendations();
    }
  }, [detail.category]);

  if (loading) {
    return (
      <View className="bg-white w-full h-full justify-center items-center">
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 16,
          paddingVertical: 20,
        }}
      >
        <View className="items-center h-[400px] w-full">
          <Image
            source={{ uri: detail.thumbnail }}
            resizeMode="contain"
            className="w-full h-[400px] bg-background"
          />
        </View>

        <Text className="font-pregular text-black text-lg text-start mt-4">
          {detail.brand}
        </Text>

        <Text className="font-pregular text-labelText text-base text-start mt-1">
          {detail.title}
        </Text>

        <Text className="font-pregular text-primary text-lg text-start mt-1">
          ${detail.price}
        </Text>

        <CustomButton
          containerStyle={"mt-5"}
          title={"Add to Cart"}
          onPress={() => {
            Alert.alert("Coming Soon", "Feature will be available soon!");
          }}
          isLoading={false}
        />

        {/* DESCRIPTION */}
        <CollapsableTextView
          title={"Description"}
          description={detail.description}
          onPress={() => setDescriptionCollapsed(!isDescriptionCollapsed)}
          isCollapsed={isDescriptionCollapsed}
          containerStyle={"mt-5"}
        />

        <Text className="mt-8 font-plight text-lg">CARE</Text>

        {/* Shipping Information */}
        <CollapsableTextView
          title={"Shipping"}
          description={detail.shippingInformation}
          onPress={() => setShippingCollapsed(!isShippingCollapsed)}
          isCollapsed={isShippingCollapsed}
          containerStyle={"mt-1"}
        />

        {/* Warranty Information */}
        <CollapsableTextView
          title={"Warranty Policy"}
          description={`*${detail.warrantyInformation} \n*${detail.returnPolicy}`}
          onPress={() => setWarrantyCollapsed(!isWarrantyCollapsed)}
          isCollapsed={isWarrantyCollapsed}
          containerStyle={"mt-4"}
        />

        {/* PRODUCT RECOMMENDATIONS */}
        <View className="items-center mt-8">
          <Text className="font-psemibold text-lg">YOU MAY ALSO LIKE</Text>
          <View className="flex-row flex-wrap justify-between">
            {recommendations.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() =>
                  router.push(`/detailScreen?productId=${item.id}`)
                }
              />
            ))}
          </View>
        </View>

        <StatusBar backgroundColor="#FFFFFF" style="dark" />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
