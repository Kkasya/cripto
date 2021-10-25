import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import getCripto from "../../common/fetch";
import TableCurrency from "./components/Table.component";

const Main = () => {
	const [assets, setAssets] = useState([]);

	useEffect(() => {
		(async () => {
			const assetsFetch = await getCripto()
			setAssets(assetsFetch.data);
		})();
	}, []);

	return (
		<div className="main main__content">
			{assets.length && <TableCurrency assets={assets}/>}
		</div>
	)
};

export default Main;