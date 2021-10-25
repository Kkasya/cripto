import React, {useEffect} from 'react';
import getCripto from "../../common/fetch";
import TableCurrency from "./components/Table.component";
import {useDispatch, useSelector} from "react-redux";
import PaginationBlock from "./components/Pagination.component";

const Main = () => {
	const dispatch = useDispatch();
	const {assets, page, limit} = useSelector(state => state.assets);

	useEffect(() => {
		(async () => {
			const assetsFetch = await getCripto(page, limit);
			 dispatch({type: "ADD_ASSETS", payload: assetsFetch.data});
		})();

	}, [page]);

	return (
		<div className="main main__content">
			{assets.length && <TableCurrency assets={assets}/>}
			<PaginationBlock />
		</div>
	)
};

export default Main;