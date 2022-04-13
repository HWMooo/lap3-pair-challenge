import React from 'react'

export function RepoResults (props) {
    let { repos } = props
    console.log('Repos is: ', repos.data)
    let repoList = repos.length !== 0 ? repos.data.map((item) => (
        <li>{item}</li>)) : <li >No repos found</li>
    

    return(
        <ul>
            {repoList}
        </ul>
    )
}
