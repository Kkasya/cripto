const activePage = JSON.parse(localStorage.getItem('page')) || 1;
const allAssets = JSON.parse(localStorage.getItem('allAssets')) || [];

const defaultState = {
	assets: [],
	allAssets: allAssets,
	activePage: activePage,
	isOpenAssets: false,
	limit: 10,
};

const assetReducer = (state = defaultState, action) => {

	switch (action.type) {
		case "ADD_ASSETS":
			return {...state, assets: action.payload, isOpenAssets: true};
		case "ADD_ALL_ASSETS":
			return {...state, allAssets: action.payload, isOpenAssets: true};
		case "SET_PAGE":
			return {...state, activePage: action.payload};
		default:
			return state;
	}
};

const addAssets = (payload) => ({type: "ADD_ASSETS", payload});
const addAllAssets = (payload) => ({type: "ADD_ALL_ASSETS", payload});
const setPage = (payload) => ({type: "SET_PAGE", payload});

export default assetReducer;
export {addAssets, setPage, addAllAssets};