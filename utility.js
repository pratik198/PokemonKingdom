//
import axios from 'axios'

async function fetchPokemonList(url){
  //const response = await axios.get(url);
  //return response.data;
  
  const apiUrl = 'https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1';
  let pokemonData;
// Make a GET request using the fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Handle the data from the API response here
    pokemonData = data.json();
    console.log(pokemonData);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });


}