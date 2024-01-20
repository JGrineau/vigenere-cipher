import React from "react";
import Decrypt from "./components/Decrypt.js";
import Encrypt from "./components/Encrypt.js";

const App = () => {
  return (
    <div>
      <h1>JP Grineau Vigenere Cipher</h1>
      <p>*Inspired by Shopify internship application*</p>
      <Encrypt />
      <hr />
      <Decrypt />
    </div>
  );
};

export default App;
