const roundSeparateNumber = (data) => {
	let number = Math.abs(Number(data));

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

	return Number((number.toFixed(2))).toLocaleString('ru');
};

export {roundSeparateNumber};