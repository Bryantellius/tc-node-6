import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    let url = `/api/products?id=${id}`;

    let results = await fetch(url);
    let resBody = await results.json();
    setProduct(resBody.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!product) return <h1>Loading...</h1>;
  else {
    return (
      <main className="container">
        <div className="card">
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            Back
          </button>
          <div className="card-body">
            <h1 className="text-center">{product.Name}</h1>
          </div>
        </div>
      </main>
    );
  }
};

export default SingleProduct;
