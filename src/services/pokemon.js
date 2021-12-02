import fetch from 'cross-fetch';

const selectedPokemon = [
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

export const fetchPoke = async () => {
    const pokemonList = await Promise.all(
        selectedPokemon.map(async (selected) => {
            const fetchedPoke = await fetch(
                `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon`
            );
            const pokemonData = await fetchPoke.json();
        })
    )
};
