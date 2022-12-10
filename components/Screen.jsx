import React from 'react'
import { StyleSheet,View,useWindowDimensions, ImageBackground } from 'react-native'
import {useTheme} from "react-native-paper";

const Screen = ({children, isProfile}) => {

  const { height, width } = useWindowDimensions();
	const theme = useTheme();

  const styles = StyleSheet.create({
	screen: {
	  flex: 1,
	  width: width,
	  height: height,
	  alignItems:'center',
		padding: 24
	},
		screenIsProfile: {
			flex: 1,
			width: width,
			height: height,
			alignItems:'space-between',
			padding: 24,
			backgroundColor: theme.colors.background
		},
	image: {
	  flex: 1,
	}
  });
  return (
	<ImageBackground source={require('../assets/Icons/WelcomeScreen.png')} resizeMode="cover" style={styles.image}>
		<View style={isProfile ? styles.screenIsProfile : styles.screen}>
			{children}
		</View>
	</ImageBackground>
	)
}

export default Screen