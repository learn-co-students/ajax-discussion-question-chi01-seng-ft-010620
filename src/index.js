const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const addButton = document.getElementsByClassName('btn btn-primary')[0]
  addButton.addEventListener("click", function() {
    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then(json => format(json) )
  })
});

function format(json) {
  const person = json.results[0]
  let data = {
    name: person.name.title + ' ' + person.name.first + ' ' + person.name.last,
    email: person.email,
    street: person.location.street.number.toString() + ' ' + person.location.street.name,
    city: person.location.city,
    state: person.location.state,
    postCode: person.location.postcode,
    phone: person.phone,
    cell: person.cell,
    dateOfBirth: new Date(person.dob.date).toLocaleDateString("en-US")
  }
  changePage(data)
}

function changePage(data) {
  const nameSpace = document.getElementById('fullname')
  const emailSpace = document.getElementById('email')
  const streetSpace = document.getElementById('street')
  const citySpace = document.getElementById('city')
  const stateSpace = document.getElementById('state')
  const postCodeSpace = document.getElementById('postcode')
  const phoneSpace = document.getElementById('phone')
  const cellSpace = document.getElementById('cell')
  const dateOfBirthSpace = document.getElementById('date_of_birth')

  nameSpace.innerHTML = data.name
  emailSpace.innerHTML = data.email
  streetSpace.innerHTML = data.street
  citySpace.innerHTML = data.city
  stateSpace.innerHTML = data.state
  postCodeSpace.innerHTML = data.postCode
  phoneSpace.innerHTML = data.phone
  cellSpace.innerHTML = data.cell
  dateOfBirthSpace.innerHTML = data.dateOfBirth

}