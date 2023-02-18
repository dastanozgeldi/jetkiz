import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { setCategory } from "../slices/categorySlice";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const CategoryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: { id, imgUrl, name, short_description, dishes },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setCategory({
        id,
        imgUrl,
        name,
        short_description,
        dishes,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            className="w-full h-64 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-gray-100 rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{name}</Text>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <View className="pb-32">
            {/* Dishrows */}
            {dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryScreen;
