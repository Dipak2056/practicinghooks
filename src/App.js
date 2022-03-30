import React, { useState } from "react";
import { OtherComponent } from "./OtherComponent";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h2>my React App</h2>
      <Product
        name="Amazon Echo"
        description="your AI assistant"
        price={59.99}
      />
    </div>
  );
}

export default App;
