import React, {useContext} from 'react';
import UserContext from '../contexts/UserContext';

const Form = () => {

    const {name, setName} = useContext(UserContext);

    return (
        <div>
            <label htmlFor="text-name">Your Name:</label>
            <input name="name" placeholder="enter your name" id="text-name" type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
        </div>
    );
}

export default Form;