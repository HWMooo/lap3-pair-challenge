import React, { useState, useEffect } from 'react';

export function Form() {

    let [userName, setUsername] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        setUsername('')
        console.log('submitted')
    }

    const updateInput = e => {
        setUsername(e.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type='text' name='text' value={userName} onChange={updateInput}></input>
            <input type="submit"></input>
        </form>
    )
}
