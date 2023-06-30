const { response, json } = require("express")
var functions = require('./functions')

async function getFirstsPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const jsonData = await response.json()
  console.log(jsonData)
}

async function getPokemonById(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  var jsonData = await response.json()
  functions.pokemonDescription(jsonData)
}

async function getPokemonByName(pokemon) {
  var jsonData, response
  url = `https://pokeapi.co/api/v2/pokemon/`
  do{
    //never get in on first iteration
    //from the 2º iteration onwards jsonData always have a value from last itearation
    if(!url)
      url = jsonData.next
    response = await fetch(url)
    jsonData = await response.json()
    //function for search the pokemon number on pokemon's list
    url = functions.findPokemon(jsonData,pokemon)
    if(!url && !jsonData.next){
      throw new Error('invalid pokemon name')
    }
  }while (!url)
  response = await fetch(url)
  jsonData = await response.json()
  functions.pokemonDescription(jsonData)
}
module.exports = {getFirstsPokemons, getPokemonById, getPokemonByName}