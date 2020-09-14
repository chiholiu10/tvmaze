export const types = {
	GET_DATA: 'GET_DATA',
	GET_EPISODE: 'GET_EPISODE',
	GET_INDEX: 'GET_INDEX'
};

export const getData = (data) => {
	return {
		type: types.GET_DATA,
		data
	};
};

export const getEpisodeList = (list) => {
	return {
		type: types.GET_EPISODE,
		list
	};
};

export const getIndex = (index) => {
	return {
		type: types.GET_INDEX,
		index
	};
};