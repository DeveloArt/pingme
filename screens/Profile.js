import React, {useState} from "react";
import {FlatList, View, Text, ScrollView, StyleSheet, Pressable} from "react-native";
import React, {useContext, useState} from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useTheme, Avatar, Button, Divider } from "react-native-paper";
import UserPhotoPlug from "../components/SvgIcons/UserPhotoPlug";
import PlusIcon from "../components/SvgIcons/PlusIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import AddScoreModal from "../components/Modals/AddScoreModal";
import Screen from "../components/Screen";
import AddPhotoModal from "../components/Modals/AddPhotoModal";
import {AuthContext} from "../contextStore/AuthContext";

const Profile = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const authCtx = useContext(AuthContext);
  console.log({ authCtx });
  const styles = StyleSheet.create({
    userAccount: {
      flexDirection: "row",
      marginTop: 16,
    },
    avatar: {
      backgroundColor: "transparent",
    },
    userData: {
      marginLeft: 24,
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
      padding: 16,
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
  });

  const [isVisibleScoreModal, setIsVisibleScoreModal] = useState(0);

  const handleSetVisibleModal = () => {
	setIsVisibleScoreModal(1)
  }
  const handleCloseModal = () => {
	setIsVisibleScoreModal(0)
  }

  return (
    <Screen isProfile>
      <SafeAreaView>
        <View style={styles.userAccount}>
          <Pressable onPress={() => {
            setIsModalOpen(true)
          }}>
            <Avatar.Image
              size={98}
              source={UserPhotoPlug}
              style={styles.avatar}
            />
          </Pressable>
          <View style={styles.userData}>
            <Text style={styles.title}>Mateusz Bukowski</Text>
            <Text style={styles.info}>Ranga: Nowicjusz</Text>
            <Text style={styles.info}>Wygrane: 6</Text>
            <Text style={styles.info}>Przegrane: 2</Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.tableWrapper}>
          <View style={styles.tableTop}>
            <Text style={styles.title}>Rozegrane mecze</Text>
            <View style={styles.button}>
              <Button
                buttonColor={theme.colors.darkGray}
                style={styles.button}
                icon={PlusIcon}
				onPress={handleSetVisibleModal}
              >
                <Text style={{ color: theme.colors.white }}>Dodaj wynik</Text>
              </Button>
            </View>
          </View>
          <View style={styles.topBar}>
            <Text style={styles.info}>Status</Text>
            <Text style={styles.info}>Przeciwnik</Text>
            <Text style={styles.info}>Wynik</Text>
          </View>
          <FlatList style={styles.rank}
            data={[
            {playerName: 'Przemysław Kalinowski', result: '3:0'},
            {playerName: 'Kamil Zieliński', result: '2:1'}
          ]}
          renderItem={({item}) =>
          <View style={styles.tableCell}>
            <View style={styles.status}></View>
            <Text style={styles.playerName}>{item.playerName}</Text>
            <Text style={styles.result}>{item.result}</Text>
          </View>}
          />
        </View>
        <AddPhotoModal />
		<AddScoreModal isVisible={isVisibleScoreModal} handleCloseModal={handleCloseModal}/>
      </SafeAreaView>
    </Screen>
  );
};

export default Profile;
