function renderAllPokemon(allPokemonData) {

poke.innerHTML =
  '<div class="row align-items-center">
    <div class="col">

      <label for="street">Street:</label>
      <h4 id="street"></h4>

      <label for="city">City:</label>
      <h4 id="city"></h4>

      <label for="state">State:</label>
      <h4 id="state"></h4>

      <label for="postcode">Post Code:</label>
      <h4 id="postcode"></h4>

    </div>'
}

function renderSinglePokemon() {

}

const formData = {
  name: event.target[0].value,
  sprites: {
    front: event.target[1].value
  }
}

const reqObj = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
}


fetch('url', requestObj)
  .then(resp => resp.json())
  .then(pokemonData => {
    console.log(jsonData)
  })






// ternary
// question ? true : false
