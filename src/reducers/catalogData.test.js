import { catalogData } from './catalogData';

test('return reducer default values', () => {
	expect(catalogData(undefined, {})).toEqual({
		catalogInfo: [],
		episodeList: []
	});
});