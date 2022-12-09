import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddScoreModal from "../components/Modals/AddScoreModal";
import Screen from "../components/Screen";

const Profile = () => {
  return (
	<Screen>
    <SafeAreaView>
      <AddScoreModal />
    </SafeAreaView>
	</Screen>
  );
};

export default Profile;
