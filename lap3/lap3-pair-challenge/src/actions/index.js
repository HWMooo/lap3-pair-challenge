import React from 'react'
import axios from 'axios';

let cors = require('cors')

const loading = username => ({ type: 'LOADING', payload: username});

const loadRepos = (results) => ({
    type: 'LOAD_RESULT',
    payload: results
})

export const getRepos = searchUser => {
    return async dispatch => {
        dispatch(loading(searchUser));
        try {
            const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/api.github.com/users/${searchUser}/repos`
            // ,{
            //     credentials: 'include',
            //     method: 'POST',
            //     headers: {'Content-Type': 'text/plain',
            //     body: JSON.stringify(data)
            // }}
            );
            let fetchedData = JSON.stringify(data)
            console.log(fetchedData.data.name)
            return fetchedData
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message})
        }
    }
}

export const getResults = searchQuery => {
    return dispatch => {
        dispatch(loading(searchQuery))
        try{
            let result = getRepos(searchQuery)
            dispatch(loadRepos({result, searchQuery}))
        } catch(e) {
            console.log(e.message)
            dispatch({type: 'SET_ERROR', paylod: e.message})
        }
    }
}
