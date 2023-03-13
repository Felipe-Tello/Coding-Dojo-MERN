import React, { useState, useEffect } from "react";
import axios from "axios";
import FormProduct from "./Form";
import List from "./List";

const Dashboard = () => {

    const [productsList, setProductsList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => {
                setProductsList(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, [])

    //Funcion para guardar con conexión a backend
    const submitProduct = product => {
        axios.post("http://localhost:8000/api/products/new", product)
            .then(res => {  
                setProductsList([...productsList, res.data]);
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{display:"flex" , justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h1>Nuevo producto</h1>
                <FormProduct onSubmitProp={submitProduct} initialTitle='' initialPrice='' initialDescription='' ></FormProduct>
                {loaded &&(
                <List products={productsList} setProducts={setProductsList} ></List>
                )}
            </div>
        </div>
    )
}

export default Dashboard;