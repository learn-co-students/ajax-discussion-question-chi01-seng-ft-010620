let allPokemonData = [];
const pokemonContainer = document.getElementById('pokemonContainer');

fetch(url)
  .then((responseObject) => responseObject.json() )
  .then((pokeJSONData) => {
    pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)
  })
