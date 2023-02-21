import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const search = async (term) => {
    const query = `*[[name, short_description] match "${term}"]`;
    const results = await sanityClient.fetch(query);

    return results;
  };

  const handleSearch = async () => {
    const results = await search(query);
    if (query !== "" && !results.length > 0) {
      Alert.alert(`No results found for "${query}"`);
    }
    setSearchResults(results);
    // display results in your app
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
      ...,
      restaurants[] ->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 pb-36">
      {/* Header */}
      <View className="flex-row p-3 items-center mx-4 gap-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Almaty <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <UserIcon size={32} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      {/* Search */}
      <View className="flex-row items-center p-2 mx-2">
        <View className="flex-row items-center flex-1">
          <View className="flex-row items-center gap-2 flex-1 bg-gray-200 h-[50px] p-3 rounded-l-xl">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              value={query}
              onChangeText={setQuery}
            />
          </View>
          <TouchableOpacity
            onPress={handleSearch}
            className="h-[50px] bg-teal-500 p-3 gap-2 rounded-r-xl"
          >
            <Text>🚀</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories (carousel) */}
        <Categories />

        {searchResults.length > 0
          ? searchResults.map((result) => (
              <View key={result.name}>
                <View className="mt-4 flex-row items-center justify-between px-4">
                  <Text className="font-bold text-xl">{result.name}</Text>
                </View>

                <Text className="text-xs text-gray-500 px-4">
                  {result.short_description}
                </Text>
              </View>
            ))
          : featuredCategories?.map((category) => (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
              />
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
