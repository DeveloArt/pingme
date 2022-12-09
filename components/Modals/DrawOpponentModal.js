import React from "react";
import Modal from "../Modal";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, Divider, useTheme, Avatar } from "react-native-paper";
import CloseIcon from "../SvgIcons/CloseIcon";
import Person from '../SvgIcons/Person';
import ScoreBoard from './ScoreBoard'
import AddScoreModal from './AddScoreModal'

const DrawOpponentModal = () => {
  const { navigate } = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  const styles = StyleSheet.create({
    contentContainerStyle: {
      width: width,
      bottom: -50,
      padding: 20,
      paddingBottom: 50,
      position: "absolute",
      backgroundColor: theme.colors.backgroundGray,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    title: {
      fontWeight: "700",
      fontSize: 16,
      marginVertical: "auto",
    },
    divider: {
      backgroundColor: theme.colors.darkGray,
    },
    buttonWrapper: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonContentStyle: {
      height: 50,
      width: 170,
    },
    labelStyle: {
      margin: "auto",
    },
    button: {
      borderRadius: 10,
      width: 170,
      height: 50,
    },
    outlinedContent: {
      color: theme.colors.darkGray,
      fontWeight: "600",
    },
    containedButton: {
      backgroundColor: theme.colors.darkGray,
    },
    containedLabel: {
      color: "#FFD024",
      fontWeight: "600",
    },
    topSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 50,
      paddingHorizontal: 20,
    },
    icon: {
      width: 25,
      height: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    textInput: {
      marginVertical: 28,
    },
    opponent: {
      flexDirection: 'row',
      marginTop: 24,
      marginBottom: 24
    }, 
    opponentDescribeWrapper: {
      justifyContent: 'space-around',
      paddingLeft: 22,
      color: "#7A7A7A"
    },
    opponentDescribe: {
      color: "#7A7A7A"
    },
    opponentName: {
      fontWeight: 'bold',
      color: "#7A7A7A"
    }


  });
  return (
    <Modal>
      <View style={styles.topSection}>
        <View style={styles.icon}>
          <CloseIcon />
        </View>
        <Text style={styles.title}>Losowanie przeciwnika</Text>
        <View style={{ width: 25, height: 25 }} />
      </View>
      <Divider bold style={[styles.divider, { marginBottom: 40 }]} />
      <Text variant="titleMedium">
        Los Ci sprzyja Przyacielu! Dziś zagrasz z...
      </Text>
      <View style={styles.opponent}> 
        <Avatar.Image style={styles.avatar} size={98} source={require('../../assets/ProfilePhotoOla.png')} />
        <View style={styles.opponentDescribeWrapper}>
          <Text style={styles.opponentName}>Aleksandra Fiałkowska</Text>
          <Text style={styles.opponentDescribe}>Ranga: Mistrzyni</Text>
          <Text style={styles.opponentDescribe}>Wygrane: 40</Text>
          <Text style={styles.opponentDescribe}>Przegrane: 3</Text>
        </View>
      </View>
      <Text style={{marginBottom: 20}} variant="titleMedium">
        Wyślij zaproszenie do wylosowanej osoby lub losuj jeszcze raz jeśli obleciał Cię strach!
      </Text>
      <Divider bold style={[styles.divider, { marginTop: 20 }]} />
      <View style={styles.buttonWrapper} >
        <Button
          mode="outlined"
          style={styles.button}
          contentStyle={styles.buttonContentStyle}
          labelStyle={[styles.labelStyle, styles.outlinedContent]}
        >
          Losuj ponownie
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          contentStyle={[
            styles.buttonContentStyle,
            { backgroundColor: "#323232" },
          ]}
          labelStyle={[
            styles.labelStyle,
            styles.containedLabel,
            { marginHorizontal: 0 },
          ]}
        >
          Wyślij zaproszenie
        </Button>
  
      </View>
    </Modal>
  );
};

export default DrawOpponentModal;
