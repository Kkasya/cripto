import axios from "axios";

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
        return 0;
    }
};

const getCurrentCripto = async (id, start, end) => {
    console.log('------------')
    try {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${id}/history`, {
            params: {
                interval: 'h1',
                start: start,
                end: end,
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
        return 0;
    }
};

export {getCripto, getCurrentCripto};