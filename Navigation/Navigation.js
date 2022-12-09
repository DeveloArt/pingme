import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, ImageBackground } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Ranking from '../screens/Ranking';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
	<ImageBackground source={require('../assets/Icons/WelcomeScreen.png')} resizeMode="cover" style={styles.image}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
	</ImageBackground>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Ranking" component={Ranking} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
	<Home />
    // <Stack.Navigator>
	//
    //   <Stack.Screen name="Profile" component={Profile} />
	//<Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //   {/* <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} /> */}
    //   <Stack.Screen name="Ranking" component={Ranking} />
    //   <Stack.Screen name="Notification" component={Notification} />
    // </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
  },
  image: {
	flex: 1,
	justifyContent: "center"
  },
  text: {
	color: "white",
	fontSize: 42,
	lineHeight: 84,
	fontWeight: "bold",
	textAlign: "center",
	backgroundColor: "#000000c0"
  }
});