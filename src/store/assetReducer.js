const defaultState = {
	assets: []
};

const assetReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_ASSETS":
			return {...state, assets: action.payload};
		default:
			return state;
	}
};

export default assetReducer;