import React, {useContext, useState} from "react";
import Modal from "../Modal";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, Divider, useTheme, TextInput } from "react-native-paper";
import CloseIcon from "../SvgIcons/CloseIcon";
import ScoreBoard from "./ScoreBoard";
import {AuthContext} from "../../contextStore/AuthContext";
import {handleSendMatch} from "../../firebase/handleSendMatch";

const AddScoreModal = ({isVisible, handleCloseModal}) => {
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
	  borderRadius: 10,
	  width: 170,
	  height: 50,
	  color: '#c0c0c0',
	  backgroundColor: '#ffffff',
    },
    labelStyle: {
      margin: "auto",
    },
    button: {
      borderRadius: 10,
      width: 170,
      height: 50,
    },
	buttonDisabled: {
	  borderRadius: 10,
	  width: 170,
	  height: 50,
	  color: '#c0c0c0',
	  backgroundColor: '#ffffff',
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
	whiteLabel: {
	  color: "#D9D9D9",
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
  });
  const authCtx = useContext(AuthContext);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const {user} = authCtx
  console.log('authCtx@@@@@@@@@@@@@@@@@@@', authCtx)
  const handleAddMatch = () =>{
	handleSendMatch(user, 'pj5OiOoVP0T5dJ6YUCG2E4zTq3o2', playerScore, opponentScore)
  }
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.topSection}>
        <View style={styles.icon} onClick={handleCloseModal}>
          <CloseIcon />
        </View>
        <Text style={styles.title}>Dodaj wynik meczu</Text>
        <View style={{ width: 25, height: 25 }} />
      </View>
      <Divider bold style={[styles.divider, { marginBottom: 10 }]} />
      <TextInput
        placeholder={"Tu wpisz imię i nazwisko przeciwnika"}
        textColor="#D9D9D9"
        activeOutlineColor="#D9D9D9"
        mode="outlined"
        style={styles.textInput}
      />
      <ScoreBoard
		playerScore={playerScore}
		opponentScore={opponentScore}
		setPlayerScore={setPlayerScore}
		setOpponentScore={setOpponentScore}
	  />
      <Text variant="titleSmall">
        Wyniki będą widoczne w tabeli dopiero po potwierdzeniu przez
        przeciwnika.
      </Text>
      <Divider bold style={[styles.divider, { marginTop: 20 }]} />
      <View style={styles.buttonWrapper}>
        <Button
          mode="outlined"
          style={styles.button}
          contentStyle={styles.buttonContentStyle}
          labelStyle={[styles.labelStyle, styles.outlinedContent]}
		  onPress={handleCloseModal}
        >
          Anuluj
        </Button>
		<View>
        <Button
          mode="contained"
          style={playerScore === opponentScore ? styles.buttonDisabled : styles.button}
          contentStyle={[
            styles.buttonContentStyle,
            { backgroundColor: playerScore === opponentScore  ? '#999999':"#323232" },
          ]}
          labelStyle={[
            styles.labelStyle,
            styles.containedLabel,
			playerScore === opponentScore  ? styles.whiteLabel: styles.containedLabel,
		  { marginHorizontal: 0 },
          ]}
		  disabled={playerScore === opponentScore}
		  onPress={handleAddMatch}
        >
          Dodaj
        </Button>
		</View>
      </View>
    </Modal>
  );
};

export default AddScoreModal;
