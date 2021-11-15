import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pizzas from "./reducers/pizzas"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(pizzas, composeEnhancers(applyMiddleware(thunk)));

export default store;