import React from 'react';
import { FilterForm } from '../components/Forms/FilterForm';
import { SearchForm } from '../components/Forms/SearchForm';
import { PokemonList } from '../components/PokemonList/PokemonList';
import pokeball from '../assets/pokeball.png';
import '../App.css';

export const Compendium = () => {
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

