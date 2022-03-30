import React, { useState } from "react";
import { OtherComponent } from "./OtherComponent";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h2>my React App</h2>
      <Product name="amazon" description="very good product" price={50} />
      <Product name="amazon2" description="very good product" price={60} />
      <Product name="amazo3" description="very good product" price={70} />
      <Product name="amazon4" description="very good product" price={80} />
      <Product name="amazon5" description="very good product" price={90} />
    </div>
  );
}

export default App;
