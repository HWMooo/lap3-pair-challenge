import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '../'
import { getRepos } from '../../actions'
import { RepoResults } from '../RepoResults'

export function Repos() {

    const repos = useSelector(state => state.repos);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();
    dispatch(getRepos(repos))

    const search = searchUser => dispatch(getRepos(searchUser))

    const renderRepo = () => loading ? <p>Loading . . .</p> : <RepoResults key={repos.id} repos={repos}/>

    return(
        <>
        {/* <Form getRepos={search}/> */}

        { error ? <p>oops error occured {error}</p> : renderRepo()}

        </>
    )
}

