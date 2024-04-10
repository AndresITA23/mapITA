import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import React from "react";
import { screen } from "../utils";

import ExploreStack from "./ExploreStack";
import FavoritesStack from "./FavoriteStack";
import ReservationsStack from "./ReservationsStack";
import SettingsStack from "./SettingsStack";

import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === screen.explore.tab) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === screen.favorites.tab) {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === screen.reservations.tab) {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === screen.settings.tab) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#BFA27E",
        tabBarInactiveTintColor: "gray",
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          marginHorizontal: 10,
          height: 80,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOpacity: 0.08,
        },
      })}
    >
      <Tab.Screen
        name={screen.explore.tab}
        component={ExploreStack}
        options={{ title: "Explore" }}
      />

      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favorites" }}
      />

      <Tab.Screen
        name={screen.reservations.tab}
        component={ReservationsStack}
        options={{ title: "Reservations" }}
      />

      <Tab.Screen
        name={screen.settings.tab}
        component={SettingsStack}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
