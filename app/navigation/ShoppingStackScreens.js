import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ShoppingHomeScreen from "../screens/ShoppingHomeScreen";
import ShoppingProductDetailScreen from "../screens/ShoppingProductDetailScreen";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function ShoppingStackScreens() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ShoppingHomeScreen" component={ShoppingHomeScreen} />
      <Stack.Screen
        name="ShoppingProductDetailScreen"
        component={ShoppingProductDetailScreen}
      />
    </Stack.Navigator>
  );
}
