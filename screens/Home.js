import React, { useState, useContext } from "react";
import { View } from "react-native";
import PingMeIcon from "../assets/Icons/PingMeIcon";
import CardComponentAddScore from "../components/CardComponentAddScore";
import RandomUser from "../assets/Icons/RandomUser";
import AddIcon from "../assets/Icons/AddIcon";
import PingPong from "../assets/Icons/PingPong";
import Screen from "../components/Screen";
import DrawOpponentModal from "../components/Modals/DrawOpponentModal";
import SendInvitationModal from "../components/Modals/SendInvitationModal";
import AddScoreModal from "../components/Modals/AddScoreModal";
import CardComponentSendInvitation from "../components/CardComponentSendInvitation";
import CardComponentDrawOpponent from "../components/CardComponentDrawOpponent";
import { AuthContext } from "../contextStore/AuthContext";
const Home = () => {
  const [isVisibleScoreModal, setIsVisibleScoreModal] = useState(0);
  const [isVisibleInvitationModal, setIsVisibleInvitationModal] = useState(0);
  const [isVisibleDrawOpponentModal, setIsVisibleDrawOpponentModal] =
    useState(0);
  const authCtx = useContext(AuthContext);
  console.log({ f: authCtx.user, s: authCtx.allUsers });
  const handleSetVisibleModal = () => {
    setIsVisibleScoreModal(1);
  };
  const handleCloseModal = () => {
    setIsVisibleScoreModal(0);
  };

  const handleSetInvitationModal = () => {
    setIsVisibleInvitationModal(1);
  };
  const handleCloseInvitationModal = () => {
    setIsVisibleInvitationModal(0);
  };

  const handleSetDrawOpponentModal = () => {
    setIsVisibleDrawOpponentModal(1);
  };
  const handleCloseDrawOpponentModal = () => {
    setIsVisibleDrawOpponentModal(0);
  };
  return (
    <Screen>
      <View style={{ alignItems: "center" }}>
        <PingMeIcon />
        <CardComponentDrawOpponent
          icon={<RandomUser />}
          firstText={"Wylosuj"}
          secondText={"przeciwnika"}
          description={"Losuj przeciwników aby poznawać nowe osoby."}
          handleSetDrawOpponentModal={handleSetDrawOpponentModal}
        />
        <CardComponentSendInvitation
          icon={<PingPong />}
          firstText={"Wyślij"}
          secondText={"zaproszenie"}
          description={"Wysyłaj zaproszenia do ulubionych rywali."}
          left
          handleSetInvitationModal={handleSetInvitationModal}
        />
        <CardComponentAddScore
          icon={<AddIcon />}
          firstText={"Dodaj wynik"}
          secondText={"meczu"}
          description={"Dodawaj wyniki meczu aby brać udział w #grywalizacji!"}
          handleSetVisibleModal={handleSetVisibleModal}
        />
      </View>
      <AddScoreModal
        isVisible={isVisibleScoreModal}
        handleCloseModal={handleCloseModal}
      />
      <SendInvitationModal
        isVisible={isVisibleInvitationModal}
        handleCloseInvitationModal={handleCloseInvitationModal}
      />
      <DrawOpponentModal
        isVisible={isVisibleDrawOpponentModal}
        handleCloseDrawOpponentModal={handleCloseDrawOpponentModal}
      />
    </Screen>
  );
};

export default Home;
