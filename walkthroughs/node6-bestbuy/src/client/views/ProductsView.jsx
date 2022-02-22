import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as React from "react";

const Products = () => {
  const [products, setProducts] = useState(null);

  const fetchData = async (direction, Name = "") => {
    let url = "/api/products";

    if (direction || Name) {
      let params = [];

      if (products && products.startingAt + direction > 0)
        params.push(`startingAt=${products.startingAt + direction}`);

      if (Name) params.push(`Name=${Name}`);

      url += `?${params.join("&")}`;
    }

    console.log("CALLING FETCHDATA: ", url);
    let results = await fetch(url);
    let resBody = await results.json();
    setProducts(resBody);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container">
      <h1 className="text-center">Products</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            aria-label="Product Name"
            placeholder="'Macbook e.g.'"
            className="form-control"
            onChange={(e) => fetchData(0, e.target.value)}
          />
        </div>
      </form>
      <ul className="list-group">
        {products ? (
          products.data.map((item) => (
            <li key={item.ProductID} className="list-group-item">
              <Link to={`${item.ProductID}`}>{item.Name}</Link>
            </li>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </ul>
      <div
        className="btn-group"
        style={{
          visibility:
            products && products.data.length > 0 ? "visible" : "hidden",
        }}
      >
        <button
          className="btn btn-secondary"
          onClick={() => fetchData(-10)}
          disabled={products ? products.startingAt == 0 : true}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={() => fetchData(10)}
          disabled={products ? products.data.length == 0 : true}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Products;
