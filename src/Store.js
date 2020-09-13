import { createStore, applyMiddleware } from 'redux';
import { catalogData } from './reducers';

export const store = createStore(
    catalogData,
);