import React from 'react';
import history from "../../history";
import { DetailPage } from './DetailPage';
import { Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import { store } from "../../Store";

test('DetailPage running', () => {
	const detailpageComponent = shallow(
		<Provider store={store}>
			<Router history={history}>
				<DetailPage/>
			</Router>
		</Provider>
	);

	expect(detailpageComponent).toHaveLength(1);
});