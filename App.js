import { StatusBar } from 'expo-status-bar';
import { useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, MD3Theme, Provider as PaperProvider } from 'react-native-paper';
import Navigation from './navigation/Navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthContextProvider, { AuthContext } from './contextStore/AuthContext';


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
  const authCtx = useContext(AuthContext);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authCtx.isAuthenticated(true);
      }
   }, [auth]);
  })
  return (
    <AuthContextProvider>
    <PaperProvider theme={paperTheme}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </PaperProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
