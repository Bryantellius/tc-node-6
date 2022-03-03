import Cell from "./Cell";

const Row = ({ word, guess }) => {
  return (
    <div className="row">
      {word.split("").map((letter, i) => {
        return <Cell value={letter} index={i} guess={guess} key={i} />;
      })}
    </div>
  );
};

export default Row;
