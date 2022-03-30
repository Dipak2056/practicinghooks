import React from "react";
import ItemDescription from "./ItemDescription";

const Product = ({ name, description, price }) => {
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <div>
        <ItemDescription description={description} price={price} />
      </div>
    </div>
  );
};

export default Product;
