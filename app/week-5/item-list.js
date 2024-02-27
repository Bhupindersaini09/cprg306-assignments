"use client";
import { useState } from "react";
import React from "react";
import items from "./items.json";
import Item from "./item";

const ItemList = () => {
const [sortBy, setSortBy] = useState('name');
const sortedItems = [...items].sort((a, b) => {
  if (sortBy === 'name') {
    return a.name.localeCompare(b.name);
  } else if (sortBy === 'category') {
    return a.category.localeCompare(b.category);
  }
   return 0;
});

const renderSortButton = (label, value) => {
    return (
        <button
        className="p-2 bg-blue-500 text-black "
        onClick={() => setSortBy(value)}
        style={{backgroundColor: sortBy === value ? 'blue' : 'white'}}
        >
        {label}
        </button>
    );
};

return (
    <div>
        <div className="m-5 p-2">
            {renderSortButton('Sort by name', 'name')}
            {renderSortButton('Sort by category', 'category')}
        </div>
        
        <ul>
            {sortedItems.map((item) => (
            <Item key={item.id}{...item}/>
            ))}
        </ul>
    </div>
);
};

export default ItemList;