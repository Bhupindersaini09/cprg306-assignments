"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page () {
  const router = useRouter();
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  // Fetch the user's shopping list items
  const loadItems = async () => {
    try {
      const items = await getItems(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

const handleAddItem = async (newItem) => {
  try {
    // Add the item to the shopping list using addItem function
    await addItem(user.uid, newItem);
    // Update the state with the newly added item
    setItems(prevItems => [...prevItems, newItem]);
  } catch (error) {
    console.error("Error adding item:", error);
  }
}



const handleItemSelect = (item) => {
  setSelectedItemName(item.name);
};


  // Render the shopping list page only if the user is logged in
  return user ? (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2 p-3">
          <h3 className="text-xl font-bold">Meal Ideas</h3>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  ) : null;
};

