import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Button,
  Divider,
  useTheme,
  TextInput,
  IconButton,
} from "react-native-paper";

const ScoreBoard = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.column}>
        <Text>Ty</Text>
        <View style={styles.board}>
          <Text style={styles.score}>0</Text>
        </View>
        <View style={styles.iconButtons}>
          <IconButton />
          <IconButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  board: {
    backgroundColor: "#323232",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 115,
    width: 115,
    marginVertical: 8,
  },
  score: {
    color: "#D9D9D9",
    fontSize: 70,
    fontWeight: "500",
  },
  iconButtons: {
    flexDirection: "row",
    justifyContent,
  },
});

export default ScoreBoard;
