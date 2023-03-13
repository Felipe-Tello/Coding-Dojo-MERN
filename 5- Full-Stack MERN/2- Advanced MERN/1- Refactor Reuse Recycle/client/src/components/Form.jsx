import React, { useState } from "react";

const FormProduct = (props) => {

    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title,price,description});
        setDescription("")
        setTitle("")
        setPrice("")
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input id="price" name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="descripcion">Description:</label>
                    <input id="description" name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}
 
export default FormProduct;