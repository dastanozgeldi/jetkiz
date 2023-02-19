import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  View,
} from "react-native";
import { createUser } from "../sanity";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (name && password) {
      const success = await createUser(name, password);
      if (success) {
        return navigation.navigate("Home");
      }
      Alert.alert("Could not register", success);
    } else {
      return Alert.alert("Name or password haven't been entered.");
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
        onPress={handleRegister}
        className="bg-teal-400 p-2 rounded-lg w-[100px]"
      >
        <Text className="text-white font-bold text-center">Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="text-gray-500">Already registered? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
