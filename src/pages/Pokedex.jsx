import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import Header from '../components/shared/Header'
import './styles/pokedex.css';

const Pokedex = () => {

    //! Inicializador de /pokedex
    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0' //All pokemons, 20 to 20

    //! User
    const { trainerName } = useSelector(state => state)

    //! Renderizar dependiendo de FormPoke
    const [formUrl, setFormUrl] = useState(urlBase)

    return (
        <div className="pokedex_main">
            <Header />
            <div className="pokedex_main__content">
                <h1 className="pokedex_main__title">
                    <img className="pokedex_main__logo" src="/images/pokedex_name.png" alt="pokedex_logo" />
                </h1>
                <p className="pokedex_main__welcome">
                    Bienvenido <span className="pokedex_main__trainer_name">{trainerName}
                    </span>
                    , aqui podras encontrar tus pokemones favoritos</p>
                <FormPoke className="pokedex_main__form_poke"
                    urlBase={urlBase}
                    setFormUrl={setFormUrl}
                />
            </div>
            <PokeContainer className="pokedex_main__poke_container"
                formUrl={formUrl}
                setFormUrl={setFormUrl}
            />
        </div>
    )
}

export default Pokedex

