const defaultState = {
    assets24h: [],
    details: {},
};

const detailsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "ADD_ASSETS_24h":
            return {...state, assets24h: action.payload};
        case "ADD_DETAILS":
            return {...state, details: action.payload};
        default:
            return state;
    }
};

const addAssets24 = (payload) => ({type: "ADD_ASSETS_24h", payload});
const addDetails = (payload) => ({type: "ADD_DETAILS", payload});

export default detailsReducer;
export {addAssets24, addDetails};