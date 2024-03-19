import { database } from "../firebase.js";
import { getQuerySnapshotOfNameInRank } from "./userService.js";

const getQuestionsFromFirestore = async () => {
  const questionsRef = database.collection("questions");
  const querySnapshot = await questionsRef.get();

  const q = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const question = {
      id: doc.id,
      pregunta: data.pregunta,
      respuestas: data.respuestas,
    };
    q.push(question);
  });

  return q;
};

const saveFinalScore = async (name, score) => {
  const queryRef = database.collection("rank");

  const querySnapshot = await getQuerySnapshotOfNameInRank(name);

  if (querySnapshot.empty) {
    await queryRef.add({
      nombre: name,
      puntaje: score,
    });
  } else {
    const docId = querySnapshot.docs[0].id;

    //use set and merge instead of update

    await queryRef.doc(docId).set(
      {
        puntaje: score,
      },
      {
        merge: true,
      }
      
    )
  }
};

export { getQuestionsFromFirestore, saveFinalScore };
