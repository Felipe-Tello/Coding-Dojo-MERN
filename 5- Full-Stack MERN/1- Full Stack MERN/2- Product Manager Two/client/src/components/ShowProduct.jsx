import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const ShowProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    return(
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <p>
                    {product.description}
                </p>
                <Link to="/">Back to home</Link>
            </div>
        </div>
    )

}
export default ShowProduct;