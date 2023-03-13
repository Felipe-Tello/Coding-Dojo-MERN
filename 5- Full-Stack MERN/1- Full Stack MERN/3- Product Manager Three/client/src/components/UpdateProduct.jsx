import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const actualizarProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/update/"+id, {
            title,
            price,
            description
        })
            .then(res => navigate('/'+id))
            .catch(err => setErrors(err.response.data.errors));
    }
 
    return (
        <div style={{display:"flex" , justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h1>Edit Product</h1>
                <form onSubmit={actualizarProducto}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input id="title" name="title" type="text" value={title} onChange= {(e) => setTitle(e.target.value)} />
                        {errors.title ? <span>{errors.title.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input id="price" name="price" type="number" value={price} onChange= {(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input id="description" name="description" type="text" value={description} onChange= {(e) => setDescription(e.target.value)} />
                        {errors.description ? <span>{errors.description.message}</span> : null}
                    </div>
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct;