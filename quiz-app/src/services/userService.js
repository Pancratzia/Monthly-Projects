import { database } from "../firebase.js";

const isNameInRank = async (name) => {
  const queryRef = database.collection("rank");
  const querySnapshot = await queryRef.where("nombre", "==", name).get();
  return !querySnapshot.empty;
};

const getQuerySnapshotOfNameInRank = async (name) => {
  const queryRef = database.collection("rank");
  const querySnapshot = await queryRef.where("nombre", "==", name).get();
  return querySnapshot;
};

export { isNameInRank, getQuerySnapshotOfNameInRank };