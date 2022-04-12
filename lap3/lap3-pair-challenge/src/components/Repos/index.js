import React from 'react';
import { useSelector } from 'react-redux';

export function Repos() {

    const repos = useSelector(state => state.repos);
    // const repoList = repos.map((username, index) => <??? key={index} )

    return(
        <>

        </>
    )
}

