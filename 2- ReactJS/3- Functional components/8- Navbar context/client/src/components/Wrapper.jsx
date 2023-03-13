import React, { useState } from 'react';
import UserContext from '../contexts/UserContext';

const Wrapper = (props) => {

    const [name, setName] = useState("Bob Smith");
    const {children} = props
    
    return (
        <UserContext.Provider value={{name,setName}}>{children}</UserContext.Provider>
    );
}

export default Wrapper;