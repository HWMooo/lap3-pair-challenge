import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return(
        <>
        <NavLink to='/'>Homepage</NavLink>
        <NavLink to='repos'>Repo Page</NavLink>
        </>
    )
}
