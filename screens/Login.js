import React from 'react'
import { StyleSheet,View,Text,useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, useTheme } from 'react-native-paper';
import Screen from "../components/Screen";

const Login = () => {
  const {navigate} = useNavigation();

  return (
    <Screen>
      <Text>
        Login
      </Text>
      <Button onPress={()=>{navigate('HomeTab')}}>
        do HomeTab
      </Button>
    </Screen>
  )
}

export default Login