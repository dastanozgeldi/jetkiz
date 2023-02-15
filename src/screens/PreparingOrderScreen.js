import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/preparingOrder.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-72 w-72"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center"
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate color="#00CCBB" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
