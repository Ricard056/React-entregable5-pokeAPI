import React from 'react';
import './styles/pokeInfoNotExist.css';
import { useParams } from 'react-router-dom';


const PokeInfoNotExist = () => {
    const backgroundImage = "/images/pokemon_not_exist.gif";

    const { name } = useParams()


    return (
        <div className="pokeinfo_not_exist" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="pokeinfo_not_exist__text">El pokemon <span>"{name}"</span> no existe</h1>
            {/* <img className="pokeinfo_not_exist__image" src={backgroundImage} alt="Pokemon-not-exist" /> */}
        </div>
    );
};

export default PokeInfoNotExist;
