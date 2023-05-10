import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'
import './styles/pokeContainer.css'

const PokeContainer = ({ formUrl, setFormUrl }) => {

    //! NOTA: Pokedex.jsx inicializa "formUrl", pero FormPoke.jsx actualiza "formUrl"
    const [pokemons, getAllPokemons] = useFetch(formUrl)

    useEffect(() => {
        getAllPokemons()
    }, [formUrl])     // console.log(pokemons) //

    //! Paginacion
    const handleClickPrevious = () => {
        if (pokemons && pokemons.previous) {
            setFormUrl(pokemons.previous);
        }
    };

    const handleClickNext = () => {
        if (pokemons && pokemons.next) {
            setFormUrl(pokemons.next);
        }
    };


    //!
    return (
        <div className='poke-container'>
            {
                pokemons?.results
                    ? (
                        <div className='poke-container--buttons'>
                            <button className='poke-container--handlePrevious' onClick={handleClickPrevious}>←</button>
                            <button className='poke-container--handleNext' onClick={handleClickNext}>→</button>
                        </div>
                    )
                    : (
                        <div className='poke-container--buttons' style={{ visibility: 'hidden' }}>
                            <button className='poke-container--handlePrevious'>←</button>
                            <button className='poke-container--handleNext'>→</button>
                        </div>
                    )
            }
            <div className='poke-container-cards'>
                {
                    pokemons?.results
                        ? (
                            pokemons?.results.map(pokemon => (
                                <PokeCard
                                    key={pokemon.url}
                                    url={pokemon.url}
                                />
                            ))
                        )
                        : (
                            pokemons?.pokemon.map(objPoke => (
                                <PokeCard
                                    key={objPoke.pokemon.url}
                                    url={objPoke.pokemon.url}
                                />
                            ))
                        )
                }
            </div>
        </div>
    );
};

export default PokeContainer