import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import PokeInfoNotExist from '../components/PokeInfo/PokeInfoNotExist'
import PokeInfoContainer from '../components/PokeInfo/PokeInfoContainer'
import Header from '../components/shared/Header'

const PokeInfo = () => {

    const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, getPokemonbyName, hasError] = useFetch(url)


    useEffect(() => {
        getPokemonbyName()
    }, [name])
    // console.log(pokemon) // 

    return (
        <div>
            <Header />
            {
                hasError
                    ? <PokeInfoNotExist />
                    : <PokeInfoContainer pokemon={pokemon}/>
                    // :
                    // <>
                    //     <h1>PokeInfo</h1>
                    //     <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                    //     <h2>{pokemon?.name}</h2>
                    // </>
            }
        </div>
    )
}

export default PokeInfo