import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, useTheme, TextInput } from "react-native-paper";
import { handleSignUp } from "../firebase/handleSignUp";
import { handleLogin } from "../firebase/handleLogIn";
import { SafeAreaView } from "react-native-safe-area-context";
import PingMeIcon from "../assets/Icons/PingMeIcon";
import { AuthContext } from '../contextStore/AuthContext';
import { useContext } from 'react';

const welcomeText = "Fajnie, że jesteś!";
const welcomeText2 =
  "się aby znajdować przeciwników do gry oraz dodawać i śledzić wyniki.";

const Login = () => {
  const { navigate } = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const authCtx = useContext(AuthContext);
  const isSigned = authCtx.user

  function submitHandler() {
    if (!isSigned) {
      handleSignUp(enteredEmail, enteredPassword, navigate);
    } else {
      const user = handleLogin(enteredEmail, enteredPassword, navigate);
      authCtx.setUserId(user.user)
    }
  }

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#1E1E1E",
      padding: 24,
    },
    text: {
      color: theme.colors.gray,
    },
    textButton: {
      fontSize: 10,
    },
    button: {
      borderRadius: 5,
    },
    welcomeSetion: {
      color: theme.colors.gray,
      alignSelf: "center",
    },
    welcomeSetionWrapper: {
      paddingTop: 24,
      paddingBottom: 48,
    },
  });

  return (
    <SafeAreaView style={styles.screen}>
      <PingMeIcon />
      <View style={styles.welcomeSetionWrapper}>
        <Text style={styles.welcomeSetion}>{welcomeText}</Text>
        <Text style={styles.welcomeSetion}>{`${
          isSigned ? "Zaloguj się" : "Zarejestruj się"
        }${welcomeText2}`}</Text>
      </View>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        mode="outlined"
        onChangeText={(value) => {
          setEnteredEmail(value);
        }}
        value={enteredEmail}
        placeholder="Tu wpisz e-mail firmowy"
        textColor="#FFFFFF"
      />
      <Text style={styles.text}>Hasło</Text>
      <TextInput
        mode="outlined"
        style={styles.input}
        onChangeText={(value) => {
          setEnteredPassword(value);
        }}
        secure
        value={enteredPassword}
        placeholder="Minimum 8 znaków"
        textColor="#FFFFFF"
      />
      <Button
        textColor={theme.colors.gray}
        style={styles.textButton}
        mode="text"
      >
        Nie pamiętam hasła
      </Button>
      <Button
        buttonColor={theme.colors.primary}
        textColor={theme.colors.background}
        onPress={submitHandler}
        style={styles.button}
      >
        {isSigned ? "ZALOGUJ" : "ZAREJESTRUJ"}
      </Button>
    </SafeAreaView>
  );
};

export default Login;
