import React, {useEffect} from 'react';
import {getCripto} from "../../common/fetch";
import TableCurrency from "./components/Table.component";
import {useDispatch, useSelector} from "react-redux";
import PaginationBlock from "./components/Pagination.component";
import Loader from "./components/Loader.component";

const Main = () => {
    const dispatch = useDispatch();
    const {assets, activePage, limit, isOpenAssets} = useSelector(state => state.assets);

    const getAssets = () => {
        (async () => {
            let assetsFetch = await getCripto(activePage, limit);
            while (!assetsFetch) assetsFetch = await getCripto(activePage, limit);
            dispatch({type: "ADD_ASSETS", payload: assetsFetch.data});
            dispatch({type: "SET_IS_OPEN_ASSETS", payload: true});
        })();
    }

    useEffect(() => {
        getAssets();
    }, [activePage]);

    useEffect(() => {
        // setInterval(getAssets, 10000);
    }, []);

    return (
        <div className="main main__content">
            {isOpenAssets ?
                <>
                    <TableCurrency assets={assets}/>
                    <PaginationBlock/>
                </>
                :
                <Loader/>}
        </div>
    )
};

export default Main;