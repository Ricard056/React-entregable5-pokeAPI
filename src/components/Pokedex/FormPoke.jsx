import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import getAllPokeNames from '../../utils/getAllPokeNames'
import './styles/formPoke.css'

const FormPoke = ({ setFormUrl, urlBase }) => {

    //! new path
    const inputPoke = useRef()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(inputPoke.current.value.trim().toLowerCase())
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }

    //! getAllTypes    https://pokeapi.co/docs/v2#pokemontype
    const url = 'https://pokeapi.co/api/v2/type/';
    const [types, getAllTypes] = useFetch(url);

    useEffect(() => {
        getAllTypes()
    }, [])
    // console.log(types) //

    const handleChange = e => {     //! Importante, cambia el prop en "PokeContainer.jsx"
        setFormUrl(e.target.value) // EXAMPLE: fairy - https://pokeapi.co/api/v2/type/18/ 
    }

    //! getAllNames
    const urlNames = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000';
    const [allNames, getAllNames] = getAllPokeNames(urlNames);

    useEffect(() => {
        getAllNames()
    }, [])
    // console.log(allNames) //


    //! Para lista de sugerencias
    const [filteredNames, setFilteredNames] = useState([]);

    const handleInputChange = e => {

        const searchValue = e.target.value.toLowerCase();

        if (searchValue === '') {
            setFilteredNames([]);
        } else {
            const filteredSuggestions = allNames
                .filter((pokemon) =>
                    pokemon.name.toLowerCase().includes(searchValue)
                )
                .slice(0, 20);
            setFilteredNames(filteredSuggestions);
        }
    };

    const handleSuggestionClick = (selectedPokemon) => {
        inputPoke.current.value = selectedPokemon;
        setFilteredNames([]);
    };

    //!


    //! Renderizado
    return (
        <div className='form-poke'>
            <form className='form-poke__form' onSubmit={handleSubmit}>
                <input className='form-poke__form_input'
                    onChange={handleInputChange}
                    ref={inputPoke}
                    type="text"
                    placeholder='Pokemon'
                />
                <button className='form-poke__form-btn'>
                    <i className='bx bx-search'></i>
                </button>

                <select className='form-poke__select'
                    onChange={handleChange}>
                    <option className='form-poke__option'
                        value={urlBase} >All Pokemons</option>
                    {
                        types?.results
                            .filter(type => type.name !== 'unknown' && type.name !== 'shadow')
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map(type => (
                                <option className='form-poke__option'
                                    key={type.url}
                                    value={type.url}
                                >
                                    {type.name}
                                </option>
                            ))
                    }
                </select>

                <div className="app__searchSuggestions">
                    {filteredNames.map((suggestion, index) => (
                        <div className="app__searchSuggestionsShow"
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion.name)}
                        >
                            {suggestion.name}
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default FormPoke