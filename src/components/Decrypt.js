import React, { useState } from "react";

const Decrypt = () => {
  const [phrase, setPhrase] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");

  const handleDecrypt = () => {
    // Implement Vigenere decryption logic here
    // Use 'phrase' and 'key', update 'output'

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Function to shift a character by a certain amount
    const shiftChar = (char, shift) => {
      const charIndex = alphabet.indexOf(char.toUpperCase());
      if (charIndex === -1) return char; // Not an alphabet character

      const shiftedIndex = (charIndex - shift + 26) % 26;
      return char === char.toUpperCase()
        ? alphabet[shiftedIndex]
        : alphabet[shiftedIndex].toLowerCase();
    };

    const decryptVigenere = (phrase, key) => {
      let decryptedText = "";
      const keyLength = key.length;

      for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i];
        const keyChar = key[i % keyLength];

        decryptedText += shiftChar(char, alphabet.indexOf(keyChar));
      }

      return decryptedText;
    };

    const decryptedText = decryptVigenere(phrase, key);
    setOutput(decryptedText);
  };

  return (
    <div>
      <h2>Decryption</h2>
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
      <button onClick={handleDecrypt}>Decrypt</button>
      <br />
      <textarea placeholder="Output" value={output} readOnly />
    </div>
  );
};

export default Decrypt;
