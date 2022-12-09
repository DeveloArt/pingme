import * as React from 'react';
import { StyleSheet, View} from 'react-native'
import { Button,Text  } from 'react-native-paper';


const CardComponent = ({icon, firstText, secondText, description, left}) => {

  const styles = StyleSheet.create({
	container: {
	  display: 'flex',
	  flexDirection: 'row',
	  alignItems: 'center',
	  position: 'right',
	  marginTop: 8
	},
	button: {
	  height: 120,
	  width: 120,
	  borderRadius: 10,
	  backgroundColor:'#323232',
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  rotate: "-3deg"
	},
	buttonRight: {
	  height: 120,
	  width: 120,
	  borderRadius: 10,
	  backgroundColor:'#323232',
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  rotate: "3deg"
	},
	paragraph: {
	  display: 'flex',
	  alignItems: 'center',
	  flexDirection: 'column',
	  color: '#FFFFFF',
	  fontWeight: 600,
	  marginTop: -4,
	},
	description: {
	  fontSize: 14,
	  width: 145,
	  marginLeft: 8,
	  lineHeight: 24,
	  color: '#CACACA',
	},
  });

return (
  <View style={styles.container}>
	{left && <Text variant="titleSmall" style={styles.description}>{description}</Text>}
	<Button
	  style={left ? styles.buttonRight :  styles.button}
   >
	  {icon}
	  <Text style={styles.paragraph}>
		{firstText}
	  </Text>
	  <Text style={styles.paragraph}>
		{secondText}
	  </Text>
	</Button>
	{!left && <Text variant="titleSmall" style={styles.description}>{description}</Text>}
  </View>
  )
}

export default CardComponent;