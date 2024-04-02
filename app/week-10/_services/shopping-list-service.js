import { db } from "../_utils/firebase";
import { collection, query, getDocs } from "firebase/firestore";


export async function getItems(userId) {
  try {
    const items = [];
    const querySnapshot = await getDocs(query(collection(db, `users/${userId}/items`)));
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() }); 
    });
    return items;
  } catch (error) {
    console.error("Error loading items:", error);
    return [];
  }
}


export async function addItem(userId, item) {
    try {
      const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
      return docRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      return null;
    }
  }