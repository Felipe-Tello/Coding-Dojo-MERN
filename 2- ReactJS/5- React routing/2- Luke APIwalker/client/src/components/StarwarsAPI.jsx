import React, { useState, useEffect } from "react";

const StarwarsAPI = (props) => {
    const [apiCat, setApiCat] = useState({});
    const [formData, setFormData] = useState({ category: "people", id: "0" });
    const [resultadoBusqueda, serResultadoBusqueda] = useState({});
    const [mostrarBusqueda, setMostrarBusqueda] = useState("");
    const [responseStatus, setResponseStatus] = useState("");

    /////////////////////////////////////////////////////////////////

    useEffect(() => {
        fetch(`https://swapi.dev/api/`)
            .then((response) => response.json())
            .then((data) => setApiCat(data));
    }, []);

    /////////////////////////////////////////////////////////////////

    const catKeys = Object.keys(apiCat);

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(apiCat[formData.category] + [formData.id])
            .then((response) => {
                setResponseStatus(response.status);
                return response.json();
            })
            .then((data) => {
                serResultadoBusqueda(data);
                setMostrarBusqueda(formData.category);
            });
    };

    const resultados = () => {
        if (responseStatus === 404) {
            return (
                <div>
                    <h3>Estos no son los droides que buscas...</h3>
                    <img src="https://sm.ign.com/t/ign_latam/screenshot/default/benkenobi_5wru.1280.jpg" alt="Obi Wan Kenobi" height={200} width={400}/>
                    <p>(intenta buscar nuevamente)</p>
                </div>
            );
        }
        if (mostrarBusqueda === "people") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3> <p>Altura: {resultadoBusqueda.height}</p>
                    <p>Color de pelo: {resultadoBusqueda.hair_color}</p>
                    <p>Año de nacimiento: {resultadoBusqueda.birth_year}</p>
                </div>
            );
        } else if (mostrarBusqueda === "planets") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Poblacion: {resultadoBusqueda.population}</p>
                    <p>Diametro: {resultadoBusqueda.diameter}</p>
                    <p>Terreno: {resultadoBusqueda.terrain}</p>
                </div>
            );
        } else if (mostrarBusqueda === "films") {
            return (
                <div>
                    <h3>{resultadoBusqueda.title}</h3>
                    <p>Episodio: {resultadoBusqueda.episode_id}</p>
                    <p>Director: {resultadoBusqueda.director}</p>
                    <p>Fecha de estreno: {resultadoBusqueda.release_date}</p>
                </div>
            );
        } else if (mostrarBusqueda === "species") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Vida promedio: {resultadoBusqueda.average_lifespan}</p>
                    <p>Lenguaje: {resultadoBusqueda.language}</p>
                    <p>Color de piel: {resultadoBusqueda.skin_colors}</p>
                </div>
            );
        } else if (mostrarBusqueda === "vehicles") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Modelo: {resultadoBusqueda.model}</p>
                    <p>Fabricante: {resultadoBusqueda.manufacturer}</p>
                    <p>Capacidad de Carga: {resultadoBusqueda.cargo_capacity}</p>
                    <p>Tripulacion: {resultadoBusqueda.crew}</p>
                </div>
            );
        } else if (mostrarBusqueda === "starships") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Modelo: {resultadoBusqueda.model}</p>
                    <p>Fabricante: {resultadoBusqueda.manufacturer}</p>
                    <p>Capacidad de Carga: {resultadoBusqueda.cargo_capacity}</p>
                    <p>Tripulacion: {resultadoBusqueda.crew}</p>
                </div>
            );
        }
    };

    /////////////////////////////////////////////////////////////////

    return (
        <div>
            <div>
                <div>
                    <form onSubmit={handleSubmit} onChange={handleOnChange}>
                        <div>
                            <select id="categories" name="category">
                                {catKeys.map((value, index) => {
                                    return (
                                        <option value={value} key={index}>{value}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div >
                            <label>id:</label>
                            <input type="text" placeholder="id" name="id" />
                        </div>
                        <input className="btn btn-success" type="submit" value="submit"></input>
                    </form>
                    <div id="div-result">{resultados()}</div>
                </div>
            </div>
        </div>
    );
};

export default StarwarsAPI;