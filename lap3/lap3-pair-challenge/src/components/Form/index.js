import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './style.css'

export function Form({getRepos}) {

    const [userName, setUsername] = useState('')
    let [repos, setRepos] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        getRepos(userName);
        console.log(`Username is: ${userName}`)
    }

    const updateInput = e => {
        setUsername(e.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='userInput'>Username:</label>
            <input type='text' id='userInput' name='text' value={userName} onChange={updateInput}></input>
            <input type="submit"></input>
        </form>
    )
}
