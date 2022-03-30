import React from "react";

const ItemDescription = ({ description, price }) => {
  return (
    <div>
      Detail about the product;-{description} <br />
      price of the product :- {price}
    </div>
  );
};

export default ItemDescription;
