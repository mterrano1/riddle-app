import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/riddles'>Riddles</NavLink>
            <NavLink to='/riddles/new'>Add New Riddle</NavLink>
            <NavLink to='/challenge'>Challenge</NavLink>
        </nav>
    );
}

export default NavBar;