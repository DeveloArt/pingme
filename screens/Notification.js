import React, {useState} from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import {Divider} from 'react-native-paper'
import Screen from "../components/Screen";
import PingMeIcon from "../assets/Icons/PingMeIcon";
import NotificationCard from "../components/NotificationCard";

const Notification = () => {
  const [currentMenu, setCurrentMenu] = useState(1)

  const styles = StyleSheet.create({
	containerIcon: {
	  marginLeft: 26,
	  marginRight: 'auto',
	  marginBottom: 40,
	},
	menu: {
	  display: 'flex',
	  flexDirection: 'row',
	  position: 'relative'
	},
	menuYellow: {
	  marginLeft: 12,
	  marginRight: 12,
	  fontSize: 14,
	  lineHeight: 24,
	  textAlign: 'center',
	  color: '#FFD024',
	  padding: 8,
	},
	menuGray: {
	  marginLeft: 12,
	  marginRight: 12,
	  fontSize: 14,
	  lineHeight: 24,
	  textAlign: 'center',
	  color: '#ACACAC',
	  padding: 8,
	},
	notificationTextContainer: {
	  marginRight: 'auto',
	  marginLeft: 26,
	  marginTop: 24
  },
	notificationText: {
	  fontSize: 12,
	  lineHeight: 20,
	  color: '#ACACAC'
	}
  });

  const handleClickNotification = () => {
	setCurrentMenu(0)
  }

  const handleClickInvitations = () => {
	setCurrentMenu(1)
  }

  return (
    <Screen>
	  <PingMeIcon style={styles.containerIcon}/>
	  <View style={styles.menu}>
		<Text style={currentMenu === 0 ? styles.menuYellow : styles.menuGray} onPress={handleClickNotification}>
		  Powiadomienia
		</Text>
	    <Text style={currentMenu === 1 ? styles.menuYellow : styles.menuGray} onPress={handleClickInvitations}>
		  Wysłane zaproszenia
	    </Text>
	  </View>
	  <ScrollView>
	  <View style={styles.notificationTextContainer}>
		<Text style={styles.notificationText}>
		   {currentMenu == 0 ? `Masz X nowych powiadomień.`: 'Wysłane zaproszenia, które oczekują na przyjęcie:'}
		</Text>
	  </View>
	  <NotificationCard
		notification={currentMenu === 0}
		invitation={currentMenu === 1}
	  />
	  <NotificationCard
		notification={currentMenu === 0}
		invitation={currentMenu === 1}
	  />
	  <NotificationCard
		notification={currentMenu === 0}
		invitation={currentMenu === 1}
	  />
	  <NotificationCard
		notification={currentMenu === 0}
		invitation={currentMenu === 1}
	  />
	  </ScrollView>
      </Screen>
  )
}

export default Notification