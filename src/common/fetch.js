import axios from "axios";
import {addAllAssets, addAssets} from "../store/assetReducer";
import {addAssets24, addDetails} from "../store/detailsReducer";
import {getDetails} from "./utils";

const getAllCripto = () => {
    return async (dispatch) => {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        dispatch(addAllAssets(response.data.data));
    }
};

const getCripto = (page, limit) => {
    return async (dispatch) => {
        const response = await axios.get('https://api.coincap.io/v2/assets', {
            params: {
                limit: limit,
                offset: (page - 1) * limit,
            }
        });
        dispatch(addAssets(response.data.data));
    }
};

const getCurrentCripto = (id, start, end, isDetails) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${id}/history`, {
            params: {
                interval: 'h1',
                start: start,
                end: end,
            }
        });
        if (isDetails) {
            dispatch(addDetails(getDetails(response.data.data)));
        } else dispatch(addAssets24(response.data.data));
    }
};

export {getCripto, getCurrentCripto, getAllCripto};