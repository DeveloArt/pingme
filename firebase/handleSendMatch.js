import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { firestore } from "./config";

export const handleSendMatch = (winnerId, looserId, winnerScore, looserScore) => {
  const sendingMatch = [
	{id:winnerId, score:winnerScore, isWinner: winnerScore > looserScore},
	{id:looserId, score:looserScore, isWinner: winnerScore < looserScore},
  ]
  const addNewScore = () => {
	const matchRef = collection(firestore, "matches");
	setDoc(doc(matchRef), {sendingMatch}).catch((err) =>
	  console.log(err)
	);
  };
  addNewScore().then(() => console.log('KONIEC'))
};
