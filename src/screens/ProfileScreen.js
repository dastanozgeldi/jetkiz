import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LockClosedIcon,
  RewindIcon,
  UserIcon,
} from "react-native-heroicons/solid";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="mx-4">
      {/* Navbar */}
      <View className="relative mb-10">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute bg-gray-100 rounded-full p-2"
        >
          <ArrowLeftIcon color={"#00CCBB"} size={20} />
        </TouchableOpacity>
      </View>

      {/* User Details */}
      <View className="space-y-4">
        <Text className="text-3xl font-bold">Ваш профиль</Text>
        <View className="items-center gap-2">
          <Image
            className="w-32 h-32 rounded-full"
            source={{
              uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            }}
          />
          <Text className="text-2xl font-semibold">Qabyl Adil</Text>
        </View>
      </View>

      {/* About App */}
      <View className="my-6 space-y-4">
        <Text className="text-xl font-semibold">About Jetkiz</Text>

        {/* Privacy Policy */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Privacy Policy")}
          className="flex-row items-center justify-between"
        >
          <View className="flex-row items-center gap-2">
            <LockClosedIcon color={"#00CCBB"} width={28} height={28} />
            <Text className="text-lg">Privacy policy</Text>
          </View>
          <ChevronRightIcon color={"#00CCBB"} />
        </TouchableOpacity>
        {/* App Developer */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Who Developed App")}
          className="flex-row items-center justify-between"
        >
          <View className="flex-row items-center gap-2">
            <UserIcon color={"#00CCBB"} width={28} height={28} />
            <Text className="text-lg">Who developed the app?</Text>
          </View>
          <ChevronRightIcon color={"#00CCBB"} />
        </TouchableOpacity>
        {/* Jetkiz Premium */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Jetkiz Premium")}
          className="flex-row items-center justify-between"
        >
          <View className="flex-row items-center gap-2">
            <RewindIcon color={"#00CCBB"} width={28} height={28} />
            <Text className="text-lg">Jetkiz Premium</Text>
          </View>
          <ChevronRightIcon color={"#00CCBB"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
