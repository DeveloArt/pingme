import React from 'react'
import { StyleSheet,View,useWindowDimensions, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, useTheme, Text } from 'react-native-paper';
import PingMeIcon from "../assets/Icons/PingMeIcon";
import CardComponent from '../components/CardComponent'
import RandomUser from "../assets/Icons/RandomUser";
import AddIcon from "../assets/Icons/AddIcon";
import PingPong from "../assets/Icons/PingPong";

const Home = () => {
  const {navigate} = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  const styles = StyleSheet.create({
    screen: {
	  width: width,
      flex: 1,
      alignItems:'center',
    },
  	IconStyle: {
	  marginTop: 62,
	  marginBottom: 48
	}
  });
  return (
	<View style={styles.screen}>
	  <PingMeIcon style={styles.IconStyle}/>
		<CardComponent icon={<RandomUser /> }firstText={'Wylosuj'} secondText={'przeciwnika'} description={'Losuj przeciwników aby poznawać nowe osoby.'}/>
	  <CardComponent icon={<PingPong /> }firstText={'Wyślij'} secondText={'zaproszenie'} description={'Wysyłaj zaproszenia do ulubionych rywali.'} left/>
	  <CardComponent icon={<AddIcon /> }firstText={'Dodaj wynik'} secondText={'meczu'} description={'Dodawaj wyniki meczu aby brać udział w #grywalizacji!'}/>
	</View>
  )
}

export default Home