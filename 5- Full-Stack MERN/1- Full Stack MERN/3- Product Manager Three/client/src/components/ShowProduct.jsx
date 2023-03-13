import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const ShowProduct = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    //Delete Product 
    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/delete/"+id)
            .then(res => navigate('/'));
    }

    return(
        <div style={{display:"flex" , justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <p>
                    {product.description}
                </p>
                <div>
                    <Link to={`/${product._id}/edit`}>Edit</Link>
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </div>
                <Link to="/">Back to home</Link>
            </div>
        </div>
    )
}
export default ShowProduct;