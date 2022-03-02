import { useEffect, useState } from "react";
import "./App.css";

// https://api.hatchways.io/assessment/sentences/1

// Display the sentence when the page loads

function App() {
  const [sentence, setSentence] = useState("");

  // Accept a word (string)
  // Scramble the word, first and last letters remain the same, randomize the middle letters
  const scrambleWord = (word) => {
    // If the word is 3 letters or less, return the word unscrambled
    if (word.length < 4) return word;

    // Get the first letter
    const firstLetter = word.slice(0, 1);
    // Get the middle letters
    const middleLetters = word.slice(1, -1);
    // Get the last letter
    const lastLetter = word.slice(-1);

    // Convert middleLetters to an array
    // Sort the array values by 0.5 subtracted by a random number between 0 and 1
    // Convert the array back to a string
    const scrambled = middleLetters
      .split("")
      .sort(() => 0.5 - Math.random()) // returns a pseudo-random number between 0 and 1
      .join("");

    return firstLetter + scrambled + lastLetter;
  };

  async function getSentence() {
    try {
      let response = await fetch(
        "https://api.hatchways.io/assessment/sentences/1"
      );
      let { data } = await response.json();
      console.log(data.sentence);
      setSentence(data.sentence);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSentence();
  }, []);

  if (sentence) sentence.split(" ").forEach(scrambleWord);

  return (
    <div className="App">
      <header className="App-header">
        <p>{sentence}</p>
        <p>{sentence.split(" ").map(scrambleWord).sort(() => 0.5 - Math.random()).join(" ")}</p>
      </header>
    </div>
  );
}

export default App;
