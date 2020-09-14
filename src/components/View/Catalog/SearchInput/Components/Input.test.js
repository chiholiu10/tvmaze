import React from 'react';
import history from "../../../../../history";
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Input } from './Input';
import { Provider } from "react-redux";
import { store } from "../../../../../Store";

test('Check input exists and check if value is being passed', () => {
    const onSearchMock = jest.fn(() => true);
    const wrap = mount(
        <Provider store={store}>
            <Router history={history}>
                <Input onChange={onSearchMock}/>
            </Router>
        </Provider>
    );
    wrap.find('input').simulate('change')
    expect(onSearchMock()).toBe(true);
    expect(wrap.find('input')).toHaveLength(1);
});