import React from 'react'
import { StyleSheet,View,useWindowDimensions, ImageBackground } from 'react-native'

const Screen = ({children}) => {

  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
	screen: {
	  flex: 1,
	  width: width,
	  height: height,
	  alignItems:'space-between',
		padding: 24
	},
	image: {
	  flex: 1,
	}
  });
  return (
	<ImageBackground source={require('../assets/Icons/WelcomeScreen.png')} resizeMode="cover" style={styles.image}>
	  <View style={styles.screen}>
		{children}
	  </View>
	</ImageBackground>
  )
}

export default Screen