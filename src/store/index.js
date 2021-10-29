import assetReducer from "./assetReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import detailsReducer from "./detailsReducer";
import walletReducer from "./walletReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	assets: assetReducer,
	details: detailsReducer,
	wallet: walletReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;