import { View, Text, Pressable } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems=useSelector(selectNumberOfItems)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:"white"}}}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color={"gray"} />
                <Text style={{ marginLeft: 5, fontWeight: "600" }}>{numberOfItems}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
