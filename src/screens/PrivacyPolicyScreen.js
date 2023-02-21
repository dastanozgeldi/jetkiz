import { Image, Text, View } from "react-native";

const PrivacyPolicyScreen = () => {
  return (
    <View className="space-y-4">
      <View className="items-center justify-center my-6 space-y-4">
        <Image
          className="w-[150px] h-[150px] rounded-full border-2 border-red-400"
          source={require("../assets/icon.png")}
        />
        <Text className="font-semibold text-2xl text-center">
          Privacy Policy
        </Text>
      </View>
      <View className="mx-4 space-y-2">
        <Text className="text-xl font-semibold">Important Policies</Text>
        <Text>
          We respect our customer's rights and therefore do not use their{" "}
          <Text className="font-bold">personal nor private data</Text>. All data
          we collect is the{" "}
          <Text className="font-bold">full name and password</Text> of the user.
        </Text>
        <Text>
          Jetkiz ensures that customer is able to purchase products, otherwise
          they aren't let in the system.
        </Text>
        <Text>
          Customer support is our top priority, so whenever a user discovers a
          problem we try to work on it by receiving necessary feedback
          beforehand.
        </Text>
      </View>
    </View>
  );
};

export default PrivacyPolicyScreen;
