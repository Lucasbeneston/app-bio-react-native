import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CartContextProvider from "./app/context/CartContext";

// Components
import TabNavigation from "./app/navigation/TabNavigation";

export default function App() {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </CartContextProvider>
  );
}
