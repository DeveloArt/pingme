import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useTheme, Avatar, Button, Divider } from "react-native-paper";
import UserPhotoPlug from "../components/SvgIcons/UserPhotoPlug";
import PlusIcon from "../components/SvgIcons/PlusIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import AddScoreModal from "../components/Modals/AddScoreModal";
import Screen from "../components/Screen";
import ScoreIcon from '../assets/Icons/ScoreIcon'
import PingMeIcon from "../assets/Icons/PingMeIcon";
import StarIcon from '../assets/Icons/StarIcon';

const rankingPosition = "Twoja pozycja w rankingu: "
const WinRate = "Twój win rate: "
const NoRankingtext = "Nie ma Cię jeszcze w rankingu."
const NoRankingtext2 = "Rozegraj minimum 10 meczy aby się w nim znaleźć."

const Ranking = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    userAccount: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    avatar: {
      backgroundColor: '#1E1E1E',
    },
    userData: {
      marginLeft: 0,
    },
    title: {
      marginBottom: 8,
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.gray,
    },
    info: {
      marginBottom: 4,
      color: theme.colors.gray,
      lineHeight: 20,
    },
    name: {
      marginLeft: 20,
      color: theme.colors.gray,
      lineHeight: 20
    },
    divider: {
      marginTop: 24,
      marginBottom: 24,
    },
    tableWrapper: {
      borderWidth: 1,
      borderColor: theme.colors.gray,
      borderRadius: 4,
    },
    tableTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
    },
    button: {
      borderRadius: 5,
    },
    topBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 16,
      borderBottomColor: theme.colors.gray,
      borderBottomWidth: 1,
    },
    rank: {},
    tableCell: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 12,
      marginHorizontal: 16,
      borderBottomColor: theme.colors.gray,
      borderBottomWidth: 1,
    },
    status: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: theme.colors.available,
    },
    playerName: {
      color: theme.colors.gray,
      lineHeight: 24,
    },
    result: {
      color: theme.colors.gray,
    },
    filters: {
      flexDirection: 'row'
    },
    number: {
      fontSize: 14,
      color: theme.colors.gray,
    },
     scorePoints: {
      color: theme.colors.gray,
      lineHeight: 20,
      marginLeft: 8
     },
     badge: {
      borderRadius: 10,
      flexDirection: 'row',
      color: theme.colors.gray,
      width: 226,
      backgroundColor: "#323232"
     },
     badgeText: {
      color: theme.colors.gray,
      fontSize: 12,
     },
     badgeTextWrapper: {
      justifyContent: 'center',
      flex: 1,
      paddingRight: 8,
      paddingTop: 8,
      paddingBottom: 8
     },
     starWrapper: {
      marginTop: 'auto',
      marginBottom: 'auto'
     }
  });

  return (
    <Screen isProfile>
      <SafeAreaView>
        <View style={styles.userAccount}>
          <View style={styles.userData}>
          <PingMeIcon/>
          </View>
          <View style={styles.badge}>
            <View style={styles.starWrapper}>
            <StarIcon />
            </View>
            <View style={styles.badgeTextWrapper}>
            <Text style={styles.badgeText}>{NoRankingtext}</Text>
            <Text style={styles.badgeText}>{NoRankingtext2}</Text>
            </View>
            {/* <View>
            <Text style={styles.badgeText}>{rankingPosition}</Text>
            <Text style={styles.badgeText}>{WinRate}</Text>
            </View> */}
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.tableWrapper}>
          <View style={styles.tableTop}>
            <Text style={styles.title}>Ranking Ping-Pong | 10.12-10.06.2023</Text>
            <View style={styles.button}>
            </View>
          </View>
          <View style={styles.topBar}>
            <Text style={styles.name}>Imię i Nazwisko</Text>
            <View style={styles.filters}>
              <Text style={styles.info}>win% </Text>
              <View>
                <ScoreIcon style={styles.iiii}/>
              </View>
              <Text style={styles.scorePoints}> Punkty </Text>
              <View style={styles.iiii}>
              <ScoreIcon />
              </View>
            </View>
          </View>
          <ScrollView style={styles.rank}>
            <View style={styles.tableCell}>
            <Text style={styles.number}>1</Text>
              <Text style={styles.playerName}>Przemysław Kalinowski</Text>
              <Text style={styles.number}>70,5%</Text>
              <Text style={styles.result}>250</Text>
            </View>
            <View style={styles.tableCell}>
            <Text style={styles.number}>1</Text>
              <Text style={styles.playerName}>Przemysław Kalinowski</Text>
              <Text style={styles.number}>70,5%</Text>
              <Text style={styles.result}>250</Text>
            </View>
            <View style={styles.tableCell}>
            <Text style={styles.number}>1</Text>
              <Text style={styles.playerName}>Przemysław Kalinowski</Text>
              <Text style={styles.number}>70,5%</Text>
              <Text style={styles.result}>250</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default Ranking;
