import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../config/colors";

// Screens
import ShoppingScreen from "../screens/ShoppingScreen";
import BlogScreen from "../screens/BlogScreen";
import MembershipScreen from "../screens/MembershipScreen";

// Components
import MembershipButton from "../components/atoms/MembershipButton";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Blog") {
            iconName = "book-outline";
          } else if (route.name === "Shopping") {
            iconName = "cart-outline";
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
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <MembershipButton />,
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{ title: "Boutique" }}
      />
    </Tab.Navigator>
  );
}
