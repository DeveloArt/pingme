import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  Provider as PaperProvider,
} from "react-native-paper";
import Navigation from "./navigation/Navigation";

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFD024",
    background: "#1E1E1E",
    error: "#DE0000",
    white: "#fff",
    gray: "#AAAAAA",
    darkGray: "#323232",
    backgroundGray: "#D9D9D9",
    available: "#6AB880",
    unavailable: "#ED7566",
  },
}
export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
