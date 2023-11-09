const pokeAPI = {};

function convertPokeApiToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.numcode = pokeDetail.order;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [ type ] = types;

  pokemon.types = types;
  pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other['official-artwork'].front_default;
 
    return pokemon
}

pokeAPI.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiToPokemon);
};

pokeAPI.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetail))
    .then((datailRequests) => Promise.all(datailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.error(error));
};

Promise.all([
  fetch(`https://pokeapi.co/api/v2/pokemon/1`),
  fetch(`https://pokeapi.co/api/v2/pokemon/2`),
  fetch(`https://pokeapi.co/api/v2/pokemon/3`),
  fetch(`https://pokeapi.co/api/v2/pokemon/4`),
]).then((results) => {
  console.log(results);
});
