import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, ImageBackground, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Email from "../components/SvgIcons/Email";
import HomeIcon from "../components/SvgIcons/HomeIcon";
import Person from "../components/SvgIcons/Person";
import Star from "../components/SvgIcons/Star";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Registry from "../screens/Registry";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Ranking from "../screens/Ranking";
import FetchingScreen from '../screens/FetchingScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#323232" },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#AAAAAA",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ size, focused, color }) => {
            return <HomeIcon fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profil",
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return <Person fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          title: "Ranking",
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return <Star fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Powiadomienia",
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return <Email fill={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="FetchingScreen"
        component={FetchingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registry"
        component={Registry}
        options={{ headerShown: false }}
      />


      <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
