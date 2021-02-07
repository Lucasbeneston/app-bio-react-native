import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "./app/config/colors";

// Screens
import ShoppingScreen from "./app/screens/ShoppingScreen";
import BlogScreen from "./app/screens/BlogScreen";
import MembershipScreen from "./app/screens/MembershipScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Blog") {
              iconName = "book-outline";
            } else if (route.name === "Shopping") {
              iconName = "cart-outline";
            } else if ((route.name = "Membership")) {
              iconName = "person-add-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.BlueKazidomi,
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Blog" component={BlogScreen} />
        <Tab.Screen
          name="Membership"
          component={MembershipScreen}
          options={{ title: "Devenir membre" }}
        />
        <Tab.Screen
          name="Shopping"
          component={ShoppingScreen}
          options={{ title: "Boutique" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
