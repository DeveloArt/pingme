import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigation from './navigation/Navigation';


const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFD024',
    background: '#1E1E1E',
    error: '#DE0000',
    white: '#fff',
    gray: '#AAAAAA',
    available: '#6AB880',
    unavailable: '#ED7566'
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
