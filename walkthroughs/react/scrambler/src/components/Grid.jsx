import Row from "./Row";

const Grid = ({ sentence, guess }) => {
  let splitGuess = guess.split(" ");

  return (
    <div className="grid">
      {sentence.split(" ").map((word, i) => {
        if (i !== sentence.length - 1) word += " ";
        return (
          <Row
            word={word}
            guess={splitGuess[i]}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Grid;
