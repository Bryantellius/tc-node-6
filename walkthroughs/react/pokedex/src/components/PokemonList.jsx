import PokemonCard from "./PokemonCard";

const PokemonList = ({ filteredPokemon }) => {
  return (
    <div className="d-flex justify-content-around">
      {filteredPokemon.map((poke, index) => {
        return (
            <PokemonCard key={"key" + poke.name + poke.num} pokemon={poke} />
        );
      })}
    </div>
  );
};

export default PokemonList;
