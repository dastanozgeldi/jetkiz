import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./src/store";
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import WhoDevelopedAppScreen from "./src/screens/WhoDevelopedAppScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import JetkizPremiumScreen from "./src/screens/JetkizPremiumScreen";
import PrivacyPolicyScreen from "./src/screens/PrivacyPolicyScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          {/* TODO: Put initialRouteName="Registration" during presentation */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen
              name="Preparing Order"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="Privacy Policy"
              component={PrivacyPolicyScreen}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="Who Developed App"
              component={WhoDevelopedAppScreen}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="Jetkiz Premium"
              component={JetkizPremiumScreen}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
