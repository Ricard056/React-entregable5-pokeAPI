import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const getAllPokeNames = (url) => {
    
    const [allNames, setAllNames] = useState([]);
    const [pokemonData, fetchPokemonData] = useFetch(url); 

    useEffect(() => {
        fetchPokemonData();
    }, []);

    useEffect(() => {
        if (pokemonData) {
            const names = [];
            pokemonData.results.forEach((pokemon, index) => {       //index empieza en 0
                names.push({ id: index + 1, name: pokemon.name });  //id empieza en 1
            });
            setAllNames(names);
        }
    }, [pokemonData]);

    return [allNames, fetchPokemonData];    // 2do es para darme opcion de reactivar/trigger 2do useEffect
};

export default getAllPokeNames;

