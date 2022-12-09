import React from 'react'
import { View } from "react-native";
import PingMeIcon from "../assets/Icons/PingMeIcon";
import CardComponent from '../components/CardComponent'
import RandomUser from "../assets/Icons/RandomUser";
import AddIcon from "../assets/Icons/AddIcon";
import PingPong from "../assets/Icons/PingPong";
import Screen from "../components/Screen";
import DrawOpponentModal from '../components/Modals/DrawOpponentModal'
import SendInvitationModal from '../components/Modals/SendInvitationModal'

const Home = () => {

  return (
	<Screen>
		<View style={{alignItems: 'center'}}>
	  <PingMeIcon />
	  <CardComponent icon={<RandomUser /> }firstText={'Wylosuj'} secondText={'przeciwnika'} description={'Losuj przeciwników aby poznawać nowe osoby.'}/>
	  <CardComponent icon={<PingPong /> }firstText={'Wyślij'} secondText={'zaproszenie'} description={'Wysyłaj zaproszenia do ulubionych rywali.'} left/>
	  <CardComponent icon={<AddIcon /> }firstText={'Dodaj wynik'} secondText={'meczu'} description={'Dodawaj wyniki meczu aby brać udział w #grywalizacji!'}/>
		</View>
	  {/* <DrawOpponentModal /> */}
	</Screen>
  )
}

export default Home