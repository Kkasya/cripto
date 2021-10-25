import assetReducer from "./assetReducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
	assets: assetReducer,
});

const store = createStore(rootReducer);

export default store;