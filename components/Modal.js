import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Modal as PaperModal,
  Portal,
  Text,
  Button,
  Divider,
  useTheme,
  TextInput,
} from "react-native-paper";
import CloseIcon from "./SvgIcons/CloseIcon";

const Modal = ({ children, visible }) => {
  const { width } = useWindowDimensions();
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
  });

  return (
    <Portal>
      <PaperModal
        visible={visible}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {children}
      </PaperModal>
    </Portal>
  );
};

export default Modal;
