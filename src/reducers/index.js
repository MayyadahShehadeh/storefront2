import {createStore, combineReducers} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './Categories.reducer';
import productsReducer from './Products.reducers';
// import cartReducer from './Cart.reducer';


let reducers = combineReducers({categoryReducer, productsReducer});

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();