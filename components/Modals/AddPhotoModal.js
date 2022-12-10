import React from "react";
import Modal from "../Modal";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet, useWindowDimensions, View} from "react-native";
import { Divider, Text, useTheme} from "react-native-paper";
import CloseIcon from "../SvgIcons/CloseIcon";
import AddFromAlbumIcon from "../SvgIcons/AddFromAlbumIcon";
import AddFromCameraIcon from "../SvgIcons/AddFromCameraIcon";


const AddPhotoModal = ({isVisible, closeModal}) => {
  const { navigate } = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  const styles = StyleSheet.create({
    contentContainerStyle: {
      width: width,
      bottom: -50,
      padding: 20,
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
    labelStyle: {
      margin: "auto",
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
    addPhotoDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24
    },
    addPhotoText: {
      marginLeft: 8
    }

  });

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.topSection}>
        <View style={styles.icon} onClick={closeModal}>
          <CloseIcon />
        </View>
        <Text style={styles.title}>Edytuj zdjęcie</Text>
        <View style={{ width: 25, height: 25 }} />
      </View>
      <Divider bold style={[styles.divider, { marginBottom: 20 }]} />
      <View style={styles.addPhotoDiv}>
        <AddFromAlbumIcon />
        <Text style={styles.addPhotoText}>Wybierz zdjęcie profilowe</Text>
      </View>
      <View style={styles.addPhotoDiv}>
        <AddFromCameraIcon />
        <Text style={styles.addPhotoText}>Zrób zdjęcie</Text><
        /View>
    </Modal>
  );
};

export default AddPhotoModal;