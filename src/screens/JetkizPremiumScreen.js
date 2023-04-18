import { Image, Text, View } from "react-native";

const JetkizPremiumScreen = () => {
  return (
    <View className="space-y-4">
      <View className="items-center justify-center my-6 space-y-4">
        <Image
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
          source={require("../assets/icon.png")}
        />
        <View>
          <Text className="font-semibold text-2xl text-center">
            Jetkiz Premium
          </Text>
          <Text>⚡️ blazingly fast delivery & support ⚡️</Text>
        </View>
      </View>
      <View className="mx-4 space-y-2">
        <Text className="text-xl font-semibold">Advantages of Premium</Text>
        <Text>- Dastan will help you with your project.</Text>
        <Text>- You will be good friends with Dastan.</Text>
        <Text>- You will be displayed on a screen of fame in Jetkiz App.</Text>
      </View>
      <View className="mx-4 space-y-2">
        <Text className="text-xl font-semibold">How to buy?</Text>
        <Text>Jetkiz Premium costs 100KZT.</Text>
        <Text>
          You receive Premium right after sending the amount of money given
          above.
        </Text>
      </View>
      <View className="mx-4 space-y-2">
        <Text className="text-xl font-semibold">Kaspi Gold</Text>
        <Text>+7 700 268 9014 (Дастан Ө.)</Text>
      </View>
    </View>
  );
};

export default JetkizPremiumScreen;
