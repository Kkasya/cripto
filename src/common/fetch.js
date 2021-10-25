import axios from "axios";

const getCripto = async () => {
	try {
		const response = await axios.get('https://api.coincap.io/v2/assets');
		return response.data;
	} catch (e) {
		throw new Error(e);
	}

};

export default getCripto;