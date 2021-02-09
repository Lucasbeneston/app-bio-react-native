import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BlogScreen from "../screens/BlogScreen";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function BlogStackScreens() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="PostsList" component={BlogScreen} />
      <Stack.Screen name="PostDetails" component={PostScreen} />
    </Stack.Navigator>
  );
}
