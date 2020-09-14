import React from 'react';
import { mount } from 'enzyme';
import { Cover } from './Cover';
import { Provider } from "react-redux";
import { store } from "../../../../Store";

test('Check cover exists', () => {
    const cover = mount(
        <Provider store={store}>
            <Cover image="test"/>
        </Provider>
    );

    expect(cover.children().props('image')).toEqual({ image: 'test' });
    expect(cover).toHaveLength(1);
});