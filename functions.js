const { response } = require("express")

//function to process and print on cosole the data from pokemon
function pokemonDescription(pokemon){
  let name = pokemon.name
  let height = pokemon.height
  let weight = pokemon.weight
  let abilities = pokemon.abilities
  let stats = pokemon.stats
  let types = pokemon.types

  console.log(
  `Pokemon name: ${name}
altura: ${height}
peso: ${weight}`)

  for (const key in stats) {
    console.log(`${stats[key].stat.name}: ${stats[key].base_stat}`)
  }
  
  console.log(`types:`)
  for (const key in types) {
    console.log(`${types[key].type.name}`)
  }
  
  console.log(`abilities:`)
  for (const key in abilities) {
    console.log(`${abilities[key].ability.name}`)
  }
}

//Function for searching for a specfic pokemon in a list
function findPokemon(list, pokemon) {
  for (const key in list.results){
    if(list.results[key].name == pokemon)
      return list.results[key].url
  }
  return null
}

module.exports = {pokemonDescription, findPokemon}