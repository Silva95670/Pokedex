const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;
const arrayPokemon = [];

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
      const pokemon =  await getPokemon(i);
        //console.log(pokemon);
        arrayPokemon.push(pokemon);
    };
    arrayPokemon.sort((a, b) => {
        
        let nameA = a.name;
        let nameB = b.name;
    
        if (nameA < nameB){
            return -1
        }
        if (nameA > nameB ) {
            return 1
        }
        return 0;
    });
    for (let i = 0; i < arrayPokemon.length; i++) {
          createPokemonCard(arrayPokemon[i])
    //console.log(arrayPokemon);
}};


const getPokemon = async id => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    //console.log(url);
    const res = await fetch(url);
   // console.log(res);
    const pokemon = await res.json();
    return pokemon;
    //console.log(pokemon);
   
    
}
  

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    //console.log(pokemonEl);
    pokemonEl.classList.add('pokemon');
    const { id, name, sprites, types } = pokemon;
    //console.log(pokemon.types);
    const type = types[0].type.name;
    //console.log(type);
    const pokeInnerHTML = `
    <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}"/>
    </div>
    <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
    
}

fetchPokemons();


