import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { Provider } from "react-redux";
import { store } from "../../../../../Store";

test('Check header exists', () => {
    const header = shallow(
        <Provider store={store}>
            <Header title="test"/>
        </Provider>
    );
    expect(header.children().props('title')).toEqual({ title: 'test' });
    expect(header).toHaveLength(1);
});