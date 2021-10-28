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

export default detailsReducer;