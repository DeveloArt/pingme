import React, { useState } from "react";
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
import Colon from "../SvgIcons/Colon";

const ScoreBoard = ({playerScore, setPlayerScore, opponentScore, setOpponentScore}) => {


  const downgrade = (func) => {
    func((state) => state - 1);
  };
  const upgrade = (func) => {
    func((state) => state + 1);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.column}>
        <Text>Ty</Text>
        <View style={styles.board}>
          <Text style={styles.score}>{playerScore}</Text>
        </View>
        <View style={styles.iconButtons}>
          <IconButton
            icon={"minus"}
            onPress={() => {
              downgrade(setPlayerScore);
            }}
            mode="contained"
            containerColor="#323232"
            iconColor="#D9D9D9"
            disabled={playerScore < 1 || opponentScore + playerScore < 1}
          />
          <IconButton
            icon={"plus"}
            onPress={() => {
              upgrade(setPlayerScore);
            }}
            mode="contained"
            containerColor="#323232"
            iconColor="#D9D9D9"
            disabled={playerScore > 4 || opponentScore + playerScore > 4}
          />
        </View>
      </View>
      <Colon style={{ marginTop: -20 }} />
      <View style={styles.column}>
        <Text>Przeciwnik</Text>
        <View style={styles.board}>
          <Text style={styles.score}>{opponentScore}</Text>
        </View>
        <View style={styles.iconButtons}>
          <IconButton
            icon={"minus"}
            onPress={() => {
              downgrade(setOpponentScore);
            }}
            mode="contained"
            containerColor="#323232"
            iconColor="#D9D9D9"
            disabled={opponentScore < 1 || opponentScore + playerScore < 1}
          />
          <IconButton
            icon={"plus"}
            onPress={() => {
              upgrade(setOpponentScore);
            }}
            mode="contained"
            containerColor="#323232"
            iconColor="#D9D9D9"
            disabled={opponentScore > 4 || opponentScore + playerScore > 4}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "space-between",
    width: 130,
  },
});

export default ScoreBoard;
