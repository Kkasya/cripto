const defaultState = {
    currency: [],
    addedCurrency: {},
    isOpenAddingWallet: false,
    isOpenWallet: false,
};

const walletReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CURRENCY":
            return {...state, currency: [...state.currency, action.payload]};
        case "DELETE_CURRENT_CURRENCY":
            return {...state, currency: [...state.currency].filter((item) => item.id !== action.payload)};
        case "ADD_CURRENT_CURRENCY":
            return {...state, addedCurrency: action.payload};
        case "SET_IS_OPEN_ADDING_WALLET":
            return {...state, isOpenAddingWallet: action.payload};
        case "SET_IS_OPEN_WALLET":
            return {...state, isOpenWallet: action.payload};
        default:
            return state;
    }
};

export default walletReducer;