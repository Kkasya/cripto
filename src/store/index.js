import assetReducer from "./assetReducer";
import {combineReducers, createStore} from "redux";
import detailsReducer from "./detailsReducer";
import walletReducer from "./walletReducer";

const rootReducer = combineReducers({
	assets: assetReducer,
	details: detailsReducer,
	wallet: walletReducer,
});

const store = createStore(rootReducer);

export default store;