const currency = JSON.parse(localStorage.getItem('currency')) || [];
const changeWallet = JSON.parse(localStorage.getItem('changeWallet')) || null;

const defaultState = {
    currency: currency,
    addedCurrency: {},
    changeWallet: changeWallet,
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