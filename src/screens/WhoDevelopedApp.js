import { Image, Text, View } from "react-native";

const WhoDevelopedApp = () => {
  return (
    <View className="space-y-4">
      <View className="items-center justify-center my-6 space-y-4">
        <Image
          className="w-[150px] h-[150px] rounded-full border-2 border-purple-400"
          source={require("../assets/developer.png")}
        />
        <View>
          <Text className="font-semibold text-2xl">私の名前わDastanです</Text>
          <Text>я не знаю японский, но люблю футбол</Text>
        </View>
      </View>
      <View className="mx-4 space-y-2">
        <Text className="text-xl font-semibold">Why Jetkiz?</Text>
        <Text>
          The app was developed as a school project for Computer Science, where
          I chose to work on a Food Delivery App.
        </Text>
        <Text>
          Recently I was looking for some ideas to become skilled at React
          Native, so this project work gave me a great opportunity to develop a
          real-world product.
        </Text>
      </View>
    </View>
  );
};

export default WhoDevelopedApp;
