import { catalogData } from './catalogData';
import { types } from '../actions/index';
// import * as actions from '../actions/index';

test('return reducer default values', () => {
    expect(catalogData(undefined, {})).toEqual({
        catalogInfo: [],
        episodeList: []
    })
});