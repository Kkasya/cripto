const defaultState = {
    currency: [],
    addedCurrency: {},
    changeWallet: null,
    isOpenAddingWallet: false,
    isOpenWallet: false,
};

const walletReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CURRENCY":
            return {...state, currency: [...state.currency, action.payload], changeWallet: action.payload.summary};
        case "DELETE_CURRENT_CURRENCY":
            return {...state, changeWallet: -Number(action.payload.summary),
                currency: [...state.currency].filter((item) =>
                    item.id !== action.payload.id && item.price !== action.payload.priceUsd)};
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