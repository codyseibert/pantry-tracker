import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [form, setForm] = useState({
    item: "bread",
    quantity: 1,
  });

  const createItemSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <div className="App">
      <form onSubmit={createItemSubmit} className="add-item-form">
        <h1>Add an Item</h1>
        <label>Item Name</label>
        <input
          value={form.item}
          onChange={(e) =>
            setForm({
              ...form,
              item: e.target.value,
            })
          }
          name="item"
        ></input>
        <label>Item Quantity</label>
        <input
          value={form.quantity}
          onChange={(e) =>
            setForm({
              ...form,
              quantity: e.target.value,
            })
          }
          type="number"
          name="quantity"
        ></input>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
