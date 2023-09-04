"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log(response);
    } catch (error) {
      console.error("Error  in  fetching data", error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="prod">
      <h1> Product List</h1>

      <div className="cards-head">
        {products.map((Product) => (
          <div key={Product.id} className="product-card">
            <img className="productImage" src={Product.images[0]}></img>

            <h1>{Product.name}</h1>
            <p>Price:{Product.price}</p>
            <p> Description:{Product.description}</p>
            <button className="btn btn-success">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}
