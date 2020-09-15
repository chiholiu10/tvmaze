import { types } from "../actions/index";

const initialState = {
	catalogInfo: [],
	episodeList: []
};

export const catalogData = (state = initialState, action) => {
	switch(action.type) {
	case types.GET_DATA: {
		return {
			...state,
			catalogInfo: action.data
		};
	}

	case types.GET_EPISODE: {
		return {
			...state,
			episodeList: action.list
		};
	}

	case types.GET_INDEX: {
		return {
			...state,
			currentIndex: action.index
		};
	}

	default: 
		return state;
	}
};