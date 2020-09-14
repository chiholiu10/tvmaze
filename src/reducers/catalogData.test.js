import { catalogData } from './catalogData';
import { types } from '../actions/index';

test('return reducer default values', () => {
	expect(catalogData(undefined, {})).toEqual({
		catalogInfo: [],
		episodeList: []
	});
});

test('test get data reducer', () => {
    const action = {
        type: types.GET_DATA,
        data: 'test'
    }
    expect(catalogData({}, action)).toEqual({
        catalogInfo: 'test'
    })
});

test('test get index reducer', () => {
    const action = {
        type: types.GET_INDEX,
        index: 1
    }
    expect(catalogData({}, action)).toEqual({
        currentIndex: 1
    })
});