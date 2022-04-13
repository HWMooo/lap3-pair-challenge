import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Repos() {

    const repos = useSelector(state => state.repos);
    const dispatch = useDispatch();
    dispatch(getRepos(repos))

    return(
        <>

        </>
    )
}

