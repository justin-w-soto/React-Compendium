import React from 'react';
import { FilterForm } from '../components/Forms/FilterForm';
import { SearchForm } from '../components/Forms/SearchForm';
import { PokemonList } from '../components/PokemonList/PokemonList';

export const Compendium = () => {
    return (
        <div>
            <h1>Hello From the PokeDex</h1>
            <SearchForm />
            <FilterForm />
            <PokemonList />
        </div>
    )
}

