import axios from 'axios';

const loading = username => ({ type: 'LOADING', payload: username});

const loadRepos = (results) => ({
    type: 'LOAD_RESULT',
    payload: results
})

export const getRepos = searchUser => {
    return async dispatch => {
        dispatch(loading(searchUser));
        try {
            const {data} = await axios.get(`https://api.github.com/users/${searchUser}/repos`);
            let fetchedData = JSON.stringify(data)
            console.log(fetchedData)
            return fetchedData
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message})
        }
    }
}

export let getResults = searchQuery => {
    return dispatch => {
        dispatch(loading(searchQuery))
        try{
            let result = getRepos(searchQuery)
            dispatch(loadRepos({result, searchQuery}))
        } catch(e) {
            console.log(e.message)
        }
    }
}
