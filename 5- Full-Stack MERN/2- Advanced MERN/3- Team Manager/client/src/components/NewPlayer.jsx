import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewPlayer = () => {

    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("N/A");
    const [errors, setErrors] = useState({});

    // Funcion para guardar con conexión a backend
    const submitPlayer = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players/new", {name, position})
            .then(res => navigate("/"))
            .catch(err => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    }

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <div>
                    <h5><Link to={`/`}>Manage Players</Link>|<Link to={`/status/game/1`}>Manage Player Status</Link></h5>
                </div>
                <h4><Link to={`/`}>List</Link>|<Link to={`/players/addplayer`}>Add Player</Link></h4>
                <h4>Add Player</h4> 
                <form onSubmit={submitPlayer}>
                    <div>
                        <label htmlFor="name">Player Name:</label>
                        {name.length >0 && name.length <2 ? <p style={{color:"red"}}>Name must have at least 2 characters</p> : <></>}
                        <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name ? <span>{errors.name.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="position">Preferred Position:</label>
                        <input id="position" name="position" type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <Link to={`/`}>Cancel</Link>
                    <input type="submit" disabled={name.length <2} value="Guardar" />
                </form>
            </div>
        </div>
     );
}
 
export default NewPlayer;