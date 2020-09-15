import React from 'react';
import history from '../../history';
import { CatalogPage } from './CatalogPage';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../../Store';

test('CatalogPage running', () => {
	const catalogComponent = shallow(<Provider store={store}><Router history={history}><CatalogPage/></Router></Provider>);
	expect(catalogComponent).toHaveLength(1);
});