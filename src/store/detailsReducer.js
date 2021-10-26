const defaultState = {
    assets24h: [],
    details: {},
    isOpen: '',
};

const detailsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ASSETS_24h":
            return {...state, assets24h: action.payload};
        case "ADD_DETAILS":
            return {...state, details: action.payload};
        case "SET_IS_OPEN":
            return {...state, isOpen: action.payload};
        default:
            return state;
    }
};

export default detailsReducer;