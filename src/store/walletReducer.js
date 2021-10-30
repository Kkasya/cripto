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
            const tempState = [...state.currency];
            const sameCurrency = tempState.filter((item) => item.id === action.payload.id && Number(item.price) === Number(action.payload.price));
            if (sameCurrency.length) {
                sameCurrency[0].count = Number(sameCurrency[0].count) + Number(action.payload.count);
                sameCurrency[0].summary = Number(sameCurrency[0].summary) + Number(action.payload.summary);

                return {
                    ...state,
                    currency: [...tempState],
                    changeWallet: action.payload.summary
                };
            } else return {
                ...state, currency: [...state.currency, action.payload],
                changeWallet: action.payload.summary
            };
        case "DELETE_CURRENT_CURRENCY":
            return {
                ...state, changeWallet: -Number(action.payload.summary),
                currency: [...state.currency].filter((item) =>
                    !(item.id === action.payload.id && Number(item.price) === Number(action.payload.price)))
            }
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

const addCurrency = (payload) => ({type: "ADD_CURRENCY", payload});
const deleteCurrentCurrency = (payload) => ({type: "DELETE_CURRENT_CURRENCY", payload});
const addCurrentCurrency = (payload) => ({type: "ADD_CURRENT_CURRENCY", payload});
const setIsOpenAddingWallet = (payload) => ({type: "SET_IS_OPEN_ADDING_WALLET", payload});
const setIsOpenWallet = (payload) => ({type: "SET_IS_OPEN_WALLET", payload});

export default walletReducer;
export {addCurrency, deleteCurrentCurrency, addCurrentCurrency, setIsOpenAddingWallet, setIsOpenWallet};