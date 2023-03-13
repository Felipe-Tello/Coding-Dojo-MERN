import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const List = (props) => {

    const [productsList, setProductsList] = useState([]);

    useEffect( () => {
        setProductsList(props.products);
    }, [props.products])

    const removeFromDom = productId => {
        setProductsList(productsList.filter(producto => producto._id !== productId))
    }

    return (
        <div>
            <h2>All Products:</h2>
            <ul>
            {productsList.map((product, index) =>(
                <li key={index}>
                    <Link to={`/${product._id}`}>{product.title}</Link>
                    <button><Link to={`/${product._id}/edit`}>Edit</Link></button>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </li>
            ))}
            </ul>
        </div>
    );
}
 
export default List;