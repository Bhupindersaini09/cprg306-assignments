import { useState } from "react";
import React from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

 const sortedItems = [...items].sort((a, b) => {
   if (sortBy === "name") {
     return (a.name || "").localeCompare(b.name || "");
   } else if (sortBy === "category") {
     return (a.category || "").localeCompare(b.category || "");
   }
   return 0;
 });


  const handleSort = (value) => {
    setSortBy(value);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", paddingTop: "20px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <label style={{ marginRight: "1rem" }}>Sort by:</label>
        <button
          style={{
            backgroundColor: sortBy === "name" ? "#3b82f6" : "#fff",
            color: sortBy === "name" ? "#fff" : "#000",
            border: "none",
            padding: "0.5rem 1rem",
            marginRight: "0.5rem",
            cursor: "pointer",
            borderRadius: "0.25rem",
            transition: "background-color 0.3s",
          }}
          onClick={() => handleSort("name")}
        >
          Name
        </button>
        <button
          style={{
            backgroundColor: sortBy === "category" ? "#3b82f6" : "#fff",
            color: sortBy === "category" ? "#fff" : "#000",
            border: "none",
            padding: "0.5rem 1rem",
            marginRight: "0.5rem",
            cursor: "pointer",
            borderRadius: "0.25rem",
            transition: "background-color 0.3s",
          }}
          onClick={() => handleSort("category")}
        >
          Category
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)}/>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
