import axios from "axios";
import { useState } from "react";

const AxiosPokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const consultaAPI = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${897}&offset=${0}`)
            .then((response) => {
                setPokemonList(response.data.results);
            });
    }

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

export default AxiosPokemonAPI;