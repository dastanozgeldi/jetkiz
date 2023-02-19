import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  View,
  SafeAreaView,
} from "react-native";
// import { authenticateUser } from "./sanityApi";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (name && password) {
      //   const success = await authenticateUser(name, password);
      const success = true;
      if (success) {
        return navigation.navigate("Home");
      }
      return Alert.alert("Could not login");
    } else {
      Alert.alert("Name or password haven't been entered.");
    }
  };

  return (
    <SafeAreaView className="m-4 space-y-4">
      <View>
        <Text className="px-1">Name</Text>
        <TextInput
          className="p-2 border border-gray-400 rounded-lg"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Text className="px-1">Password</Text>
        <TextInput
          className="p-2 border border-gray-400 rounded-lg"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-teal-400 p-2 rounded-lg w-[100px]"
      >
        <Text className="text-white font-bold text-center">Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
