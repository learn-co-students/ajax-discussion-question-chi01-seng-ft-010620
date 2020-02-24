const label = document.createElement('label')
const h4 = document.createElement('h4')

const locationDiv = document.getElementsByClassName('col')[3];
// const divh4 = document.getElementById('country')

const appendedLabel = locationDiv.appendChild(label)
const appendedH4 = locationDiv.appendChild(h4)

label.innerHTML = '<label for="country">Country:</label>'
h4.innerHTML = '<h4 id="country"></h4>'

document.addEventListener("DOMContentLoaded", () => {
  buttonListener()
});


function parseJSON(data) {

  const personData = data['results'][0];
  const personStreetNumber = personData['location']['street']['number']
  const personStreetName = personData['location']['street']['name']
  const personAddress = `${personStreetNumber} ${personStreetName}`
  const personCity = personData['location']['city']
  const personState = personData['location']['state']
  const personPostCode = personData['location']['postcode']
  const personCountry = personData['location']['country']
  const personFirstName = personData['name']['first']
  const personLastName = personData['name']['last']
  const personFullName = `${personFirstName} ${personLastName}`
  const personPhone = personData['phone']
  const personCell = personData['cell']
  const personEmail = personData['email']
  const personBirthdayArray = personData['dob']['date'].split('-')
  const personBirthdayYear = personBirthdayArray[0]
  const personBirthdayMonth = personBirthdayArray[1]
  const personBirthdayDay = personBirthdayArray[2]
  const personBirthday = `${personBirthdayMonth}, ${personBirthdayDay}, ${personBirthdayYear}`




    let street = document.getElementById('street')
    street.innerText = personAddress
    const city = document.getElementById('city')
    city.innerText = personCity
    const state = document.getElementById('state')
    state.innerText = personState
    const post = document.getElementById('postcode')
    post.innerText = personPostCode
    const country = document.getElementById('country')
    country.innerText = personCountry
    const name = document.getElementById('fullname')
    name.innerText = personFullName
    const phone = document.getElementById('phone')
    phone.innerText = personPhone
    const cell = document.getElementById('cell')
    cell.innerText = personCell
    const email = document.getElementById('email')
    email.innerText = personEmail
    const dob = document.getElementById('date_of_birth')
    dob.innerText = personBirthday

};

function fetchData(){
       let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
           .then( data => {
            parseJSON(data)

  })
};

const populateButton = document.getElementsByClassName('btn btn-primary')[0]
function buttonListener() {
  populateButton.addEventListener('click', function(event) {
  console.log('clicked')
  fetchData()
});
};
