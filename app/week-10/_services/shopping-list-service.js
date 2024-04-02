import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


export async function getItems(userId) {
  // Initialize an empty array to store items
  const items = [];

  try {
    // Construct a reference to the items subcollection for the specified user
    const userItemsRef = collection(db, `users/${userId}/items`);
    
    // Retrieve the documents in the items subcollection
    const querySnapshot = await getDocs(userItemsRef);

    // Iterate over the documents in the query snapshot
    querySnapshot.forEach((doc) => {
      // Extract the document ID and data
      const itemId = doc.id;
      const itemData = doc.data();
      
      // Construct an object containing the document ID and data
      const item = { id: itemId, ...itemData };

      // Add the item object to the items array
      items.push(item);
    });

    // Return the array of items
    return items;

export async function addItem(userId, item) {
  try {
    const userItemsRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return userItemsRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}