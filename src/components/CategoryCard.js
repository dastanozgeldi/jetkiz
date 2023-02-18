import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ id, imgUrl, name, short_description, dishes }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Category", {
          id,
          imgUrl,
          name,
          short_description,
          dishes,
        })
      }
      className="mr-2"
    >
      <Image source={{ uri: imgUrl }} className="w-16 h-16" />
      <Text className="text-center px-1 rounded font-bold">{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
