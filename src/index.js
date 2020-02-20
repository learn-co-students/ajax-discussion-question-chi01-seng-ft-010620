const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  fetchData()

  addButtonListener()

});

function fetchData() {
  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => appendData(json))
}

function addButtonListener() {
  const personButton = document.querySelector('.btn-primary');

  personButton.addEventListener('click', event => fetchData())

}

function appendData(json) {
  const profilePic = document.getElementById('profile_picture');
  profilePic.src = json['results'][0]['picture']['medium'];

  fullname.innerHTML = `${json['results'][0]['name']['first']} ${json['results'][0]['name']['last']}`;

  const email = document.getElementById('email');
  email.innerHTML = json['results'][0]['email'];

  const street = document.getElementById('street');
  street.innerHTML = `${json['results'][0]['location']['street']['number']} ${json['results'][0]['location']['street']['name']}`;
  const city = document.getElementById('city');
  city.innerHTML = json['results'][0]['location']['city'];
  const state = document.getElementById('state');
  state.innerHTML = json['results'][0]['location']['state'];
  const postcode = document.getElementById('postcode');
  postcode.innerHTML = json['results'][0]['location']['postcode'];
  
  const phone = document.getElementById('phone');
  phone.innerHTML = json['results'][0]['phone'];
  const cell = document.getElementById('cell');
  cell.innerHTML = json['results'][0]['cell'];

  const birth = document.getElementById('date_of_birth');
  birth.innerHTML = (json['results'][0]['dob']['date']).slice(0, 10);

}