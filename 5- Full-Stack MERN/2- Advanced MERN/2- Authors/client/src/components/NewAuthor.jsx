import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewAuthor = () => {

    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    // Funcion para guardar con conexión a backend
    const submitAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {name})
            .then(res => navigate("/"))
            .catch(err => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    }

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h2>Favorite authors</h2>
                <Link to={`/`}>Home</Link>
                <h4>Add a new author:</h4> 
                <form onSubmit={submitAutor}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name ? <span>{errors.name.message}</span> : null}
                    </div>
                    <Link to={`/`}>Cancel</Link>
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </div>
     );
}
 
export default NewAuthor;