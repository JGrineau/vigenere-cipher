import React, { useState } from "react";

const Encrypt = () => {
  const [phrase, setPhrase] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");

  const handleEncrypt = () => {
    // Implement Vigenere encryption logic here
    // Use 'phrase' and 'key', update 'output'

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Function to shift a character by a certain amount
    const shiftChar = (char, shift) => {
      const charIndex = alphabet.indexOf(char.toUpperCase());
      if (charIndex === -1) return char; // Not an alphabet character

      const shiftedIndex = (charIndex + shift) % 26;
      return char === char.toUpperCase()
        ? alphabet[shiftedIndex]
        : alphabet[shiftedIndex].toLowerCase();
    };

    const encryptVigenere = (phrase, key) => {
      let encryptedText = "";
      const keyLength = key.length;

      for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i];
        const keyChar = key[i % keyLength];

        encryptedText += shiftChar(char, alphabet.indexOf(keyChar));
      }

      return encryptedText;
    };

    const encryptedText = encryptVigenere(phrase, key);
    setOutput(encryptedText);
  };

  return (
    <div>
      <h2>Encryption</h2>
      <input
        type="text"
        placeholder="Enter Phrase"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <br />
      <button onClick={handleEncrypt}>Encrypt</button>
      <br />
      <textarea placeholder="Output" value={output} readOnly />
    </div>
  );
};

export default Encrypt;
