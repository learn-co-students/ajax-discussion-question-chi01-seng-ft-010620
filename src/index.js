const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.addEventListener("click", ()
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( res => res )
}))

// assign listener to "Press me to add a new person!" button
// code to assign API object fields to HTML tags 