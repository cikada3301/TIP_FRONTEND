import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationForm from "./RegistrationForm";
import Navigation from "./navigation";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import AuthForm from "./AuthForm";
import ShoppingScreen from "./ShoppingScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
          <Stack.Screen name="Navigation" component={Navigation} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login" component={AuthForm} />
          <Stack.Screen name="Shopping" component={ShoppingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

