import React from 'react';
import { shallow } from 'enzyme';
import { EpisodeList } from './EpisodeList';
import { Provider } from "react-redux";
import { store } from "../../../../../Store";

test('Check header exists', () => {
	const header = shallow(
		<Provider store={store}>
			<EpisodeList list="test"/>
		</Provider>
	);
	expect(header.children().props('list')).toEqual({ list: 'test' });
	expect(header).toHaveLength(1);
});