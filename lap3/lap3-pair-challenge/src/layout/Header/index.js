import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

export function Header() {
    return(
        <nav>
        <NavLink to='/'>Homepage</NavLink>
        <NavLink to='repos'>Repo Page</NavLink>
        </nav>
    )
}
