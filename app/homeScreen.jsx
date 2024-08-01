import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StatusBar } from "react-native";
import * as React from "react";
import ProductCard from "../components/productCard";
import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
} from "../data/api";
import { router } from "expo-router";

const HomeScreen = () => {
  const [data, setData] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      if (category) {
        const products = await getProductsByCategory(category, 0);
        setData(products.products);
      } else {
        const products = await getAllProducts();
        setData(products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const products = await getAllProducts();
        setData(products);
        const categories = await getAllCategories();
        setFilters(categories);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  React.useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <View className="flex-1 bg-white items-center">
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
        data={filters}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`w-auto h-[50px] m-2 p-3 justify-center items-center border border-[#DEDEDE] rounded-xl ${
              selectedCategory === item ? "bg-primary" : "bg-background"
            }`}
            onPress={() => {
              if (selectedCategory === item) {
                setSelectedCategory(null);
              } else {
                setSelectedCategory(item);
              }
            }}
          >
            <Text
              className={`text-xs font-plight ${
                selectedCategory === item ? "text-white" : "text-black"
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 16,
            justifyContent: "space-evenly",
          }}
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() => router.push(`/detailScreen?productId=${item.id}`)}
            />
          )}
        />
      )}
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </View>
  );
};

export default HomeScreen;
