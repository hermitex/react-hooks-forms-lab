import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsToshow, setItemsToshow] = useState(null);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

function handleSearchChange(searchValue){
  if(searchValue.length === 1){
    setItemsToshow(itemsToDisplay)
  }else if(searchValue.length > 1) {
    let newItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    setItemsToshow(newItems)
  }


}

function onItemFormSubmit(item){
    setItemsToshow([...items, item]);
}

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToshow? itemsToshow.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )) : itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
