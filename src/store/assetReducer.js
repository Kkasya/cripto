const defaultState = {
	assets: [],
	page: 1,
	limit: 10,
};

const assetReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_ASSETS":
			return {...state, assets: action.payload};
		case "SET_PAGE":
			return {...state, page: action.payload};
		default:
			return state;
	}
};

export default assetReducer;