import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FormProduct from "./Form";

const UpdateProduct = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);

    const [product, setProduct] = useState();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id]);

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/products/update/"+id, product )
            .then(res => navigate('/'+id))
            .catch(err => console.log(err));
    }
 
    return (
        <div style={{display:"flex" , justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h1>Edit Product</h1>
                {loaded &&( 
                <FormProduct onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} ></FormProduct>
                )}
            </div>
        </div>
    )

}

export default UpdateProduct;