import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import BlogHomeScreen from "../screens/BlogHomeScreen";
import BlogPostCategory from "../screens/BlogPostCategory";
import BlogPostDetailsScreen from "../screens/BlogPostDetailsScreen";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function BlogStackScreens() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BlogHomeScreen" component={BlogHomeScreen} />
      <Stack.Screen name="BlogPostCategory" component={BlogPostCategory} />
      <Stack.Screen
        name="BlogPostDetailsScreen"
        component={BlogPostDetailsScreen}
      />
    </Stack.Navigator>
  );
}
