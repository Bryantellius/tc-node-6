import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./components/Grid";

// https://api.hatchways.io/assessment/sentences/1

// Display the sentence when the page loads

const atoz = "abcdefghijklmnopqrstuvwxyz ";

function App() {
  const [sentenceNum, setSentenceNum] = useState(1);
  const [sentence, setSentence] = useState("");
  const [scrambled, setScrambled] = useState("");
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState("");
  const [isEnd, setIsEnd] = useState(false);

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

  async function getSentence(num) {
    console.log(num);
    try {
      let response = await fetch(
        "https://api.hatchways.io/assessment/sentences/" + (num || sentenceNum)
      );
      let { data } = await response.json();
      console.log(data.sentence);
      setSentence(data.sentence.toLowerCase());
      setScrambled(data.sentence.split(" ").map(scrambleWord).join(" "));
    } catch (error) {
      console.error(error);
    }
  }

  const onNext = () => {
    if (sentenceNum == 10) {
      setIsEnd(true);
    } else {
      setSentenceNum((prev) => prev + 1);
      getSentence(sentenceNum + 1);
      setScore((prev) => prev + 1);
      setGuess((prev) => "");
    }
  };

  const onKey = (e) => {
    let char = e.key.toLowerCase();
    if (atoz.includes(char)) {
      onGuess(char);
    } else if (char == "backspace") {
      onDelete();
    }
  };

  const onGuess = (char) => {
    console.log(guess.length, sentence.length, char);
    setGuess((prev) => prev + char);
  };

  const onDelete = (e) => {
    setGuess((pre) => pre.slice(0, guess.length - 1));
  };

  useEffect(() => {
    getSentence();

    console.log("useEffect");
    window.addEventListener("keyup", onKey);

    return () => {
      window.removeEventListener("keyup", onKey);
    };
  }, []);

  console.log("GUESS", guess);

  if (isEnd) {
    return (
      <div className="App d-flex justify-content-center align-items-center">
        <div className="card max-w-600">You win!</div>
      </div>
    );
  }

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="card max-w-600">
        <h1>{scrambled}</h1>
        <p>{guess}</p>
        <p>
          Guess the sentence! Start typing. <br /> The yellow blocks are meant
          for spaces
        </p>
        <p>Score {score}</p>
        <Grid sentence={sentence} guess={guess} />
        <button
          className={guess.length != sentence.length ? "hide" : ""}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
