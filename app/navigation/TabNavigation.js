import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../config/colors";

// Screens
import BlogStackScreens from "./BlogStackScreens";
import MembershipScreen from "../screens/MembershipScreen";
import ShoppingStackScreens from "./ShoppingStackScreens";

// Components
import MembershipButton from "../components/atoms/MembershipButton";

// TAB Navigation
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "ShoppingProductDetailScreen" ||
      routeName === "BlogPostDetailsScreen"
    ) {
      return false;
    }
    return true;
  };

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
      <Tab.Screen
        name="Blog"
        component={BlogStackScreens}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
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
        component={ShoppingStackScreens}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarLabel: "Boutique",
        })}
      />
    </Tab.Navigator>
  );
}
