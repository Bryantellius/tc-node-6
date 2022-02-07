import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card col-3">
      <Link to={pokemon.name.toLowerCase().replace(/ /g, "-")} state={pokemon}>
        <h2>{pokemon.name}</h2>
      </Link>
      <small>{pokemon.num}</small>
      <h3>Type</h3>
      <ul>
        {pokemon.type.map((typ, index) => {
          return <li key={"key" + typ + index}>{typ}</li>;
        })}
      </ul>
      <h3>Weaknesses</h3>
      <ul>
        {pokemon.weaknesses.map((weakness, index) => {
          return <li key={"key" + weakness + index}>{weakness}</li>;
        })}
      </ul>
    </div>
  );
};

export default PokemonCard;
