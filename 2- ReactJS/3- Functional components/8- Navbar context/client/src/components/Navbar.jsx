import React, {useContext} from 'react';
import UserContext from '../contexts/UserContext';

const Navbar = () => {

    const {name} = useContext(UserContext);

    return (
        <nav>Hi {name}!</nav>
    );
}

export default Navbar;