import React from "react";
import Product from "./Products";
import { useState } from "react";

export default function Main(props) {
  const [search, setSearch] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const search_val = search;
    const filterArray = products.filter((e) => {
      return e.name.toLowerCase().includes(search_val.toLowerCase());
    });
    console.log(filterArray);
    if (search_val === "") {
      setSearch([]);
    } else {
      setSearch([...filterArray]);
      console.log(filterArray);
      console.log(search);
    }
    setNewArray([...filterArray]);
    console.log(newArray);
  };
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <input
        className="search"
        type="text"
        placeholder="Enter Product Name"
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button className="search_btn" onClick={handleSearch}>
        Search
      </button>
      {newArray.length === 0 ? (
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      ) : (
        newArray.map((product) => {
          return (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          );
        })
      )}
    </main>
  );
}
