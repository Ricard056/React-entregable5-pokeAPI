import React from 'react'
import FormNameUser from '../components/Home/FormNameUser';
import Footer from '../components/shared/Footer';
import './styles/home.css';

const Home = () => {



    return (
        <div className="home">
            <img className="home__logo" src="/images/pokedex_name.png" alt="pokedex_logo" />
            <h2 className="home__title">¡Hola maestro pokemon!</h2>
            <p className="home__instructions">Para iniciar, dame tu nombre:</p>
            <FormNameUser />
            <Footer />
        </div>
    )
    }

export default Home