import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Components
import TabNavigation from "./app/navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
