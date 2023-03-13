import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [productsList, setProductsList] = useState([]);
    const [errors, setErrors] = useState({});

    //Funcion para guardar con conexión a backend
    const submitProduct = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", {title,price,description})
            .then(res => {
                setProductsList([...productsList, {title: title, price: price, description: description}]);
                setTitle("")
                setPrice("")
                setDescription("")
            })
            .catch(err => {
                setErrors(err.response.data.errors);
                console.log(errors)
                console.log(err.response.data.errors);
            });
    }

    //Show Product List 
    useEffect( () => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => {
                setProductsList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h1>Nuevo producto</h1>
                <form onSubmit={submitProduct}>
                    <div>
                        <label htmlFor="title">Nombre:</label>
                        <input id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        {errors.title ? <span>{errors.title.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="price">Precio:</label>
                        <input id="price" name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="descripcion">Descripción:</label>
                        <input id="description" name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        {errors.description ? <span>{errors.description.message}</span> : null}
                    </div>
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </div>
    )


}

export default Dashboard;