import { useState, useEffect } from 'react';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { Controls } from '../components/Controls/Controls';
import { fetchPokemon, fetchSearchPokemon } from '../services/pokemon';

import pokeball from '../assets/pokeball.png';
import '../App.css';

export const Compendium = () => {
    const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  
  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await fetchPokemon();
       setPokemons(pokemonList);
      setLoading(false);
    };

    getPokemon();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchSearchPokemon(searchName)
      .then((searchedPokemons) => {
        setPokemons(searchedPokemons)
     })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
        setSearchName('');
        setSelectedType('');
      });
  };

    return (
        <div>
            <img className= 'pokeball' src={pokeball} alt='pokeball' />
            <h1>Hello From the PokeDex</h1>
            <PokemonList />
            <Controls
                name={searchName}
                handleSubmit={handleSubmit}
                handleNameChange={setSearchName}
                types={types}
                filterChange={setSelectedType}
                selectedType={selectedType}
            />
        </div>
    )
}

