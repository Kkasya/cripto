import axios from "axios";
import {useSelector} from "react-redux";

const getCripto = async (page, limit) => {
    try {
        const response = await axios.get('https://api.coincap.io/v2/assets', {
            params: {
                limit: limit,
                offset: (page-1)*limit,
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
        return [];
    }

};

export default getCripto;