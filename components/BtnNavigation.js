import "react-native-gesture-handler";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import WordsNavigation from "./WordsNavigation";
import LearningNavigation from "./LearningNavigation";

import { COLORS } from "../constants";
import { StatusBar } from "react-native";

import Settings from "./../screens/Settings";
import { useThemeContext } from "./ThemeContext";
import { useMemo } from "react";

const Tab = createBottomTabNavigator();

export default function BtnNavigation() {
  const { theme } = useThemeContext();

  const MyTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme ? COLORS.appBackground : "#ffff",
      },
    }),
    [theme]
  );

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: COLORS.appBackground },
            headerStyle: {
              backgroundColor: COLORS.appBackground,
            },
            headerTitleAlign: "center",
            headerTintColor: COLORS.primary900,

            tabBarActiveTintColor: COLORS.primary900,
          }}
        >
          <Tab.Screen
            name="Words"
            component={WordsNavigation}
            options={{
              tabBarLabel: "Words",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Ionicons name="list-outline" size={size} color={color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Learning"
            component={LearningNavigation}
            options={{
              headerShown: false,
              tabBarLabel: "Learning",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Ionicons name="book-outline" color={color} size={size} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Ionicons name="settings-outline" color={color} size={size} />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar
        backgroundColor={COLORS.appBackground}
        barStyle="light-content"
      />
    </>
  );
}
