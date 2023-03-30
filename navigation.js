import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { Button } from "react-native";

const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Персональные данные"
        onPress={() => navigation.navigate("Home")}
        color={"#8b00ff"}
      ></Button>
      <Button
        title="Список товаров"
        onPress={() => navigation.navigate("Details")}
        color={"#8b00ff"}
      ></Button>
      <Button
        title="Корзина"
        onPress={() => navigation.navigate("Shopping")}
        color={"#8b00ff"}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#8b00ff",
  },
});

export default Navigation;
