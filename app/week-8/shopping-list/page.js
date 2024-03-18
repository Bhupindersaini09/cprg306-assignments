"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page () {
  const router = useRouter();
  const { user } = useUserAuth();

  // Redirect to the landing page if the user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  const [items, setItems] = useState(ItemData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const handleItemSelect = (itemName) => {
    if (typeof itemName === "string") {
      const cleanedItemName = itemName
        .replace(
          /,.*|[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]|\p{Emoji}/gu,
          ""
        )
        .trim();
      setSelectedItemName(cleanedItemName);
    } else {
      console.error("Invalid itemName:", itemName);
    }
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




