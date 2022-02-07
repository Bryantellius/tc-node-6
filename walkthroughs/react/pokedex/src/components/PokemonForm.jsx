import { renderOptions } from "../utils";

const PokemonForm = ({
  searchName,
  searchType,
  searchWeakness,
  filteredPokemon,
  filterResults,
}) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="searchName">Name</label>
        <input
          type="text"
          name="searchName"
          id="searchName"
          value={searchName}
          onChange={(event) => filterResults(event.target.value, "name")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="searchType">Type</label>
        <select
          name="searchType"
          id="searchType"
          value={searchType}
          onChange={(event) => filterResults(event.target.value, "type")}
        >
          <option value=""></option>
          {renderOptions(filteredPokemon, "type").map((type, index) => {
            return (
              <option key={"key" + type + index} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="searchWeakness">Weakness</label>
        <select
          name="searchWeakness"
          id="searchWeakness"
          value={searchWeakness}
          onChange={(event) => filterResults(event.target.value, "weakness")}
        >
          <option value=""></option>
          {renderOptions(filteredPokemon, "weaknesses").map(
            (weakness, index) => {
              return (
                <option key={"key" + weakness + index} value={weakness}>
                  {weakness}
                </option>
              );
            }
          )}
        </select>
      </div>
    </form>
  );
};

export default PokemonForm;
