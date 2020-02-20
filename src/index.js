const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  buttonListener();
});

function buttonListener(){
  const butt = document.getElementsByClassName("btn btn-primary")[0];
  butt.addEventListener("click", event => {
    fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => {  
      const hashTing = json
    
      const name = document.querySelector("#fullname");
      const emanLluf = `${hashTing["results"][0]["name"]["title"]}.  ${hashTing["results"][0]["name"]["first"]} ${hashTing["results"][0]["name"]["last"]}`;
      name.innerText = emanLluf;
      
      const email = document.querySelector("#email");
      email.innerText = hashTing["results"][0]["email"];
      
      const dateOfBirth = document.querySelector("#date_of_birth");
      dateOfBirth.innerText = hashTing["results"][0]["dob"]["date"];

      const street = document.querySelector("#street");
      const screet = `${hashTing["results"][0]["location"]["street"]["number"]} ${hashTing["results"][0]["location"]["street"]["name"]}`;
      street.innerText = screet;

      const city = document.querySelector("#city");
      city.innerText = hashTing["results"][0]["location"]["city"];

      const state = document.querySelector("#state");
      state.innerText = hashTing["results"][0]["location"]["state"];

      const phone = document.querySelector("#phone");
      phone.innerText = hashTing["results"][0]["phone"];

      const cell = document.querySelector("#cell");
      cell.innerText = hashTing["results"][0]["cell"];

      const postCode = document.querySelector("#postcode");
      postCode.innerText = hashTing["results"][0]["location"]["postcode"];


    })
  })
}

