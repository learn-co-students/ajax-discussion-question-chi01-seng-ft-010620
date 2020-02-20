const fullname = document.getElementById("fullname");

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
  const email = document.getElementById("email");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const postcode = document.getElementById("postcode");
  const phone = document.getElementById("phone");
  const cell = document.getElementById("cell");
  const dob = document.getElementById("date_of_birth");

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let user = data.results[0];
    fullname.innerText = `${user.name.first} ${user.name.last}`
    email.innerText = `${user.email}`
    street.innerText = `${user.location.street}`
    city.innerText = `${user.location.city}`
    state.innerText = `${user.location.state}`
    postcode.innerText = `${user.location.postcode}`
    phone.innerText = `${user.phone}`
    cell.innerText = `${user.cell}`
    dob.innerText = `${user.dob.date}`
  })
});

// create function button