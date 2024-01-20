const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.id;
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;
  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
  return pokemon;
}
pokeApi.getPokemondetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};
//ofseat =  primiro limit  maximo
pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  //
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemondetail)) //o Promese.all espera todas as reqs terminarem
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails);
};

pokeApi.getStatusPokemons = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  //
  return (
    fetch(url)
      .then((response) => response.json())
      //.then((jsonBody) => jsonBody.results)
      .then((response) => {
        const status = response.stats;
        return status;
      })
  );
};

pokeApi.convertePokeStatus = (status) => {
  const pokemonStatus = new PokemonStatus();
  //console.log()
  pokemonStatus.HP = status[0].base_stat;
  pokemonStatus.Attack = status[1].base_stat;
  pokemonStatus.Defense = status[2].base_stat;
  pokemonStatus.SpAtt = status[3].base_stat;
  pokemonStatus.SpDef = status[4].base_stat;
  pokemonStatus.Speed = status[5].base_stat;
  //console.log(pokemonStatus)
  return pokemonStatus;
};
