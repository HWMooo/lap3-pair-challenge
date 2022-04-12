const initState = {
    username: "",
    repos: [],
    loading: false
}

export function SearchReducer(state=initState, action) {
    switch(action.type) {
        case "LOADING":
            return {...state, username: action.payload, repos: [], loading: true}
        case "LOAD_REPOS":
            return {...state, username: action.payload.username, repos: action.payload.repos, loading: true, error: false}
        case "SET_ERROR":
            return {...state, error: action.payload, loading: false}
    }
}
