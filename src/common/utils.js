const roundSeparateNumber = (data) => {
	let number = Number(data);

	const options = {
	'trillion': 't',
	'billion': 'b',
	'million': 'm',
};

	if (number >= 1.0e+12) {
		return (number / 1.0e+12).toFixed(2) + `${options.trillion}`;
	}

	if (number >= 1.0e+9) {
		return (number / 1.0e+9).toFixed(2) + `${options.billion}`;
	}

	if (number >= 1.0e+6) {
		return (number / 1.0e+6).toFixed(2) + `${options.million}`;
	}

	if (number < 0.01) {
		return number.toFixed(4);
	}

	return Number((number.toFixed(2))).toLocaleString('ru');
};

const getDetails = (assetDetails) => {

	const assets = [...assetDetails];
	let max = assets[0].priceUsd;
	let min = assets[0].priceUsd;
	let total = 0;

	assets.forEach((asset) => {
		max = (asset.priceUsd > max) ? asset.priceUsd : max;
		min = (asset.priceUsd < min) ? asset.priceUsd : min;
		total += Number(asset.priceUsd);
	});
	const average = total / assets.length;

	return {max, min, average};
};

const getDateTime = () => {
	const options = {year: 'numeric', month: 'long', day: 'numeric'};
	const now = new Date();
	const startDay = (new Date()).setUTCHours(0, 0, 0, 0);
	const start24h = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
	const date = now.toLocaleDateString("en-US", options);

	return { now, start24h, startDay, date};
}

export {roundSeparateNumber, getDetails, getDateTime};