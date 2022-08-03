import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemData, setItemData] = useState({
    name: "",
    category: "Produce",
  });

  function handleChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    setItemData({ id: uuid(), ...itemData, [key]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(itemData);
    setItemData({
      name: "",
      category: "",
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={itemData.name}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
