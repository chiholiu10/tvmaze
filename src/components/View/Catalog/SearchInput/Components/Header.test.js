import React from 'react';
import history from "../../../../../history";
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { Provider } from "react-redux";
import { store } from "../../../../../Store";

test('Check header exists', () => {
	const header = shallow(
		<Provider store={store}>
			<Router history={history}>
				<Header/>
			</Router>
		</Provider>
	);
	expect(header).toHaveLength(1);
});