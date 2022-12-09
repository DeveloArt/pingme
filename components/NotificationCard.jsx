import * as React from 'react';
import {StyleSheet, useWindowDimensions, View, Button} from 'react-native'
import { Text  } from 'react-native-paper';
import ExitIcon from "../assets/Icons/ExitIcon";


const NotificationCard = ({notification, invitation}) => {

  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
	card: {
	  marginTop: 16,
	  width: width - 24,
	  borderRadius: 10,
	  backgroundColor:'#323232',
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	},
	cardContainer: {
		paddingTop: 17,
	  paddingLeft: 21,
	  paddingRight: 21,
	  paddingBottom: 17
	},

	paragraphSmall: {
	  fontSize: 10,
	  lineHeight: 20,
	  color: '#ACACAC',
	},
	paragraph: {
	  fontSize: 12,
	  lineHeight: 20,
	  color: '#ACACAC',
	},
	acceptButton: {
	  backgroundColor: '#ACACAC',
	  borderRadius: 8,
	  width: 73,
	  height: 38,
	  alignItems: 'center',
	  justifyContent: 'center',
	  color: '#1E1E1E',
	  marginLeft: 'auto',
	  marginRight: 8,
	  marginBottom: 8,
	},
	cancelButton: {
	  backgroundColor: '#ACACAC',
	  borderRadius: 8,
	  width: 148,
	  height: 38,
	  alignItems: 'center',
	  justifyContent: 'center',
	  color: '#1E1E1E',
	  marginLeft: 'auto',
	  marginRight: 8,
	  marginBottom: 8,
	},
	rejectButton: {
	  borderRadius: 8,
	  width: 73,
	  height: 38,
	  alignItems: 'center',
	  justifyContent: 'center',
	  borderColor: '#ACACAC',
	  borderWidth: 1,
	  marginLeft: 'auto',
	  marginRight: 8,
	  marginBottom: 8,
	},
	buttonTextBlack: {
	  fontWeight: "600",
	  fontSize: 14,
	  lineHeight: 24,
	},
	buttonTextWhite: {
	  fontWeight: "600",
	  fontSize: 14,
	  lineHeight: 24,
	  color: '#ACACAC'
	},
	twoButtons: {
	  display: 'flex',
	  flexDirection: 'row',
	  marginLeft: 'auto'
	},
	cardNavigation: {
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	},
  });

  return (
	<View style={styles.card}>
	  <View style={styles.cardContainer}>
		<View style={styles.cardNavigation}>
		  <Text style={styles.paragraphSmall}>
			Pon., 8.12.2022, 17:00
		  </Text>
		<ExitIcon/>
		</View>
		  <Text style={styles.paragraph}>
			Przemysław Kalinowski przyjął Twoje zaproszenie do gry. Skontaktuj się z nim i ustalcie termin spotkania. Połamania paletek!
		  </Text>
	  </View>
	  {notification &&
		<View style={styles.twoButtons}>
		<View style={styles.rejectButton} >
		  <Text style={styles.buttonTextWhite}>Odrzuć</Text>
		</View>
		<View style={styles.acceptButton} >
		  <Text style={styles.buttonTextBlack}>Przyjmij</Text>
		</View>
	  </View>}
	  {invitation &&
		<View style={styles.cancelButton} >
		<Text style={styles.buttonTextBlack}>Anuluj zaproszenie</Text>
	  </View>}
	</View>
  )
}

export default NotificationCard;