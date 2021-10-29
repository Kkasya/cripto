import React, {useEffect} from 'react';
import {getCripto} from "../../common/fetch";
import TableCurrency from "./components/Table.component";
import {useDispatch, useSelector} from "react-redux";
import PaginationBlock from "./components/Pagination.component";
import Loader from "./components/Loader.component";

const Main = () => {
    const dispatch = useDispatch();
    const {assets, activePage, limit, isOpenAssets} = useSelector(state => state.assets);

    useEffect(() => {
        localStorage.setItem('page', JSON.stringify(activePage ))
        const interval = setInterval(() => dispatch(getCripto(activePage, limit)), 2000);
        return () => clearInterval(interval);
    }, [activePage, limit]);

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