import React from "react";
import Modal from "../Modal";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, Divider, useTheme, TextInput } from "react-native-paper";
import CloseIcon from "../SvgIcons/CloseIcon";

const SendInvitationModal = ({isVisible, handleCloseInvitationModal}) => {
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
  });
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.topSection}>
        <View style={styles.icon} onClick={handleCloseInvitationModal}>
          <CloseIcon />
        </View>
        <Text style={styles.title}>Wy??lij zaproszenie do gry</Text>
        <View style={{ width: 25, height: 25 }} />
      </View>
      <Divider bold style={[styles.divider, { marginBottom: 20 }]} />
      <Text variant="titleMedium">
        Ju?? wiesz z kim chcesz zagra??? Wyszukaj przeciwnika i wy??lij mu
        zaproszenie.
      </Text>
      <TextInput
        placeholder={"Tu wpisz imi?? i nazwisko przeciwnika"}
        textColor="#D9D9D9"
        activeOutlineColor="#D9D9D9"
        mode="outlined"
        style={styles.textInput}
      />
      <Text variant="titleSmall">
        ...mo??esz te?? wybra?? kogo?? z ostatnich przeciwnik??w:
      </Text>
      <Divider bold style={[styles.divider, { marginTop: 20 }]} />
      <View style={styles.buttonWrapper}>
        <Button
          mode="outlined"
          style={styles.button}
          contentStyle={styles.buttonContentStyle}
          labelStyle={[styles.labelStyle, styles.outlinedContent]}
		  onPress={handleCloseInvitationModal}
        >
          Anuluj
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
          Wy??lij zaproszenie
        </Button>
      </View>
    </Modal>
  );
};

export default SendInvitationModal;
