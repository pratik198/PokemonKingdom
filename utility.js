//
import axios from 'axios'

async function fetchPokemonList(url){
  const response = await axios.get(url);
  return response.data;
}