const Cell = ({ value, guess, index }) => {
  let classes = `cell ${
    value == " " ? "cell-space" : (guess && value == guess[index]) ? "cell-correct" : ""
  }`;
  return <span className={classes}>{guess ? guess[index] : "?"}</span>;
};

export default Cell;
