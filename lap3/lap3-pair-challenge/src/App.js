import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage, RepoPage } from './pages'
import { Header } from './layout'



function App(){
    return(
        <>
        <Header />
            <Routes>
                <Route path='/' element={<Homepage />} />  
                <Route path='/repos' element={<RepoPage />} />  
            </Routes>
        </>
    )
}

export default App;
