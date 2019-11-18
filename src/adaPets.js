// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

let setResult = result.setResult;
let setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((response) =>{
      return setResult(response.data)
  })
  .catch((error) => {
      return setError("IDK")
  })
}

const showDetails = (selectedPet) => {

  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }

  const URL = BASE_URL + selectedPet
  axios.get(URL)
  
  .then((response)=> {
    console.log(response)
    return setResult(response.data)
  })
  .catch((error)=> {
    return setError("failed to show details")
  })
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 3.
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
