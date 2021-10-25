import React, {useEffect} from 'react';
import getCripto from "../../common/fetch";
import TableCurrency from "./components/Table.component";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
	const dispatch = useDispatch();
	const assets = useSelector(state => state.assets.assets)

	useEffect(() => {
		(async () => {
			const assetsFetch = await getCripto();
			 dispatch({type: "ADD_ASSETS", payload: assetsFetch.data});
		})();
	}, []);

	return (
		<div className="main main__content">
			{assets.length && <TableCurrency assets={assets}/>}
		</div>
	)
};

export default Main;