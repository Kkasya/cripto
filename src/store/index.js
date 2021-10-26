import assetReducer from "./assetReducer";
import {combineReducers, createStore} from "redux";
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
	assets: assetReducer,
	details: detailsReducer,
});

const store = createStore(rootReducer);

export default store;