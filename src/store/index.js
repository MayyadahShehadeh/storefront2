import {createStore, combineReducers,applyMiddleware} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './Categories.reducer';
import productsReducer from './Products.reducers';
import thunk from 'redux-thunk';


let reducers = combineReducers({categoryReducer, productsReducer});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();