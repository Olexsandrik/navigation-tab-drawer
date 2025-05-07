import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import WordsNavigation from "./components/WordsNavigation";
import LearningNavigation from "./components/LearningNavigation";

import { COLORS } from "./constants";
import { StatusBar } from "react-native";

import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
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
