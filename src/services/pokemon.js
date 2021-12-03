
const favPokemon = [
    'charizard',
    'typhlosion',
    'blaziken',
    'mewtwo',
    'suicune',
    'pidgeot',
    'golduck',
    'gardevoir',
    'ninetales',
    'houndoom',
  ];
  
export const fetchPokemon = async () => {
    const pokemonList = await Promise.all(
        favPokemon.map(async (fav) => {
          const fetchedPokemon = await fetch(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${fav}`
          );
    
          const pokemonData = await fetchedPokemon.json();
    
          
         
           
        })
      );
      return pokemonList;
    };
    


