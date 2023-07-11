import { collection, doc, setDoc } from "firebase/firestore";

const docRef = doc(db, "posts");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  console.log("No such document!");
}
//Get data from firestore

//Loop through data to get akk posts
//map posts and display from latest to earliest
