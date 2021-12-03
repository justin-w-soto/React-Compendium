import { useState, useEffect } from 'react';
import { FilterForm } from '../components/Forms/FilterForm';
import { SearchForm } from '../components/Forms/SearchForm';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { fetchPokemon } from '../services/pokemon';

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

    return (
        <div>
            <img className= 'pokeball' src={pokeball} alt='pokeball' />
            <h1>Hello From the PokeDex</h1>
            <SearchForm />
            <FilterForm />
            <PokemonList />
        </div>
    )
}

