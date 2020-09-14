import { createStore } from 'redux';
import catalogData from './reducers';

export const store = createStore(
    catalogData
);