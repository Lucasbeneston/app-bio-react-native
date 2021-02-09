import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BlogListScreen from "../screens/BlogListScreen";
import BlogPostDetailsScreen from "../screens/BlogPostDetailsScreen";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function BlogStackScreens() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BlogListScreen" component={BlogListScreen} />
      <Stack.Screen
        name="BlogPostDetailsScreen"
        component={BlogPostDetailsScreen}
      />
    </Stack.Navigator>
  );
}
