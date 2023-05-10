import React from 'react'
import './styles/pokeInfoContainer.css';

const PokeInfoContainer = ({ pokemon }) => {
    // console.log(pokemon) //

    const movements = pokemon?.moves || [];
    const maxBaseStat = 150;

    //!
    return (
        <section className="pokeinfo__container">

            <div className="pokedex_main__title">
                <img className="pokedex_main__logo" src="/images/pokedex_name.png" alt="pokedex_logo" />
            </div>

            <article className="pokeinfo__article">
                <div className="pokeinfo__article__container_img">
                    <img className="pokeinfo__article__container_img__img"
                        src={pokemon?.sprites?.other["official-artwork"].front_default} alt="pokemon" />
                </div>
                <div className="pokeinfo__article__status_main">
                    <p className="pokeinfo__article__status_main__id"># {pokemon?.id}</p>
                    <h2 className="pokeinfo__article__status_main__name">{pokemon?.name}</h2>
                    <div className="pokeinfo__article__status_main__whc">
                        <div className="pokeinfo__article__status_main__whcc">
                            <span className="pokeinfo__article__status_main__whcc_title">Weight</span>
                            <p className="pokeinfo__article__status_main__whcc_value">{pokemon?.weight}</p>
                        </div>
                        <div className="pokeinfo__article__status_main__whcc">
                            <span className="pokeinfo__article__status_main__whcc_title">Height</span>
                            <p className="pokeinfo__article__status_main__whcc_value">{pokemon?.height}</p>
                        </div>
                    </div>
                </div>
                <div className="pokeinfo__info_c">
                    <div className="pokeinfo__info_cc">
                        <div className="pokeinfo__info_cc__types">
                            <h2 className="pokeinfo__info_cc__types_title">Type</h2>
                            <div className="pokeinfo__info_cc__types_type">
                                <p>{pokemon?.types?.[0].type.name}</p>
                                {pokemon?.types?.[1].type.name &&
                                    <p>{pokemon?.types?.[1].type.name}</p>}
                            </div>
                        </div>
                        <div className="pokeinfo__info_cc__abilities">
                            <h2>Abilities</h2>
                            <div >
                                <p>{pokemon?.abilities?.[0].ability.name}</p>
                                <p>{pokemon?.abilities?.[1].ability.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pokeinfo__progres_bars">
                        <h2>Stats Base</h2>
                        <p>
                            <b>HP:</b>
                            <b>{pokemon?.stats?.[0].base_stat}/{maxBaseStat}</b>
                        </p>
                        <progress value={pokemon?.stats?.[0].base_stat} max={maxBaseStat}></progress>
                        <p>
                            <b>Attack:</b>
                            <b>{pokemon?.stats?.[1].base_stat}/{maxBaseStat} </b>
                        </p>
                        <progress value={pokemon?.stats?.[1].base_stat} max={maxBaseStat}></progress>
                        <p>
                            <b>Defense:</b>
                            <b>{pokemon?.stats?.[2].base_stat}/{maxBaseStat}</b>
                        </p>
                        <progress value={pokemon?.stats?.[2].base_stat} max={maxBaseStat}></progress>
                        <p>
                            <b>Speed</b>
                            <b>{pokemon?.stats?.[5].base_stat}/{maxBaseStat}</b>
                        </p>
                        <progress value={pokemon?.stats?.[5].base_stat} max={maxBaseStat}></progress>
                    </div>
                </div>
            </article>

            <article className="pokeinfo__movements">
                <h2 className="pokeinfo__movements_title">Movements</h2>
                <div className="pokeinfo__movements_container">
                    {movements.slice(0, 40).map((move, index) => (
                        <div key={index} className="pokeinfo__movements_container__poke">
                            <p>{move.move.name}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
};


export default PokeInfoContainer


/*
Memo:
-pokedex_main__title y pokedex_main__logo es del padre... Hacer uno propio.
*/