import { Text, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image source={{ uri: imgUrl }} className="w-16 h-16 rounded-full" />
      <Text className="text-center px-1 rounded font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
