import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const UpdateAuthor = () => {

    let navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/"+id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => {
                navigate("/error")             
            });
    }, [id, navigate])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/update/"+id, {name})
            .then(res => navigate('/'))
            .catch(err => setErrors(err.response.data.errors));
    }
 
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h2>Favorite authors</h2>
                <Link to={`/`}>Home</Link>
                <h4>Edit this author:</h4> 
                <form onSubmit={updateAuthor}>
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
    )
}

export default UpdateAuthor;