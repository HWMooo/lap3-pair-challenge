import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { SearchReducer } from './reducers/SearchReducer';

const store = createStore(SearchReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
