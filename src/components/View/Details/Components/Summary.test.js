import React from 'react';
import { shallow } from 'enzyme';
import { Summary } from './Summary';
import { Provider } from "react-redux";
import { store } from "../../../../Store";

test('Check header exists', () => {
	const summary = shallow(
		<Provider store={store}>
			<Summary summaryText="test"/>
		</Provider>
	);
	expect(summary.children().props('summaryText')).toEqual({ summaryText: 'test' });
	expect(summary).toHaveLength(1);
});