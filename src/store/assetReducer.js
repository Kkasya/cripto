const defaultState = {
	assets: [],
	activePage: 1,
	isOpenAssets: false,
	limit: 10,
};

const assetReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_ASSETS":
			return {...state, assets: action.payload};
		case "SET_PAGE":
			return {...state, activePage: action.payload};
		case "SET_IS_OPEN_ASSETS":
			return {...state, isOpenAssets: action.payload};
		default:
			return state;
	}
};

export default assetReducer;