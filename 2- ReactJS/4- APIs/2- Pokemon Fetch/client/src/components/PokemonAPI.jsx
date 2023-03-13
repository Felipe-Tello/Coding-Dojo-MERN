import { useState } from "react";

const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const consultaAPI = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${897}&offset=${0}`)
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
        });
    };

    return (
        <div>
            <div>
                <div>
                    <button onClick={consultaAPI}>Fetch Pokemon</button>
                    <div>
                        <ul>
                            {pokemonList.map((pokemon, index) => {
                                return <li key={index}>{pokemon.name}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonAPI;