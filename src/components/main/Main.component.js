import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {getCripto} from "../../common/fetch";
import TableCurrency from "./components/Table.component";
import {useDispatch, useSelector} from "react-redux";
import PaginationBlock from "./components/Pagination.component";
import Loader from "./components/Loader.component";
import Header from "../header/Header.component";
import Wallet from "../wallet/Wallet.component";
import AddingCurrency from "./components/AddingCurrency.component";
import CurrencyPage from "../currencyPage/CurrencyPage.component";

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
        setInterval(getAssets, 10000);
    }, []);

    return (
        <Router>
            <div className="main main__content">
                <Header/>
                <Wallet/>
                <AddingCurrency/>
                <Switch>
                    {assets.map((item) => (
                        <Route
                            key={item.id}
                            path={"/currency/:id"}
                            render={() => <CurrencyPage />}
                        />
                    ))}
                    <Route path="/">
                        {isOpenAssets ?
                            <>
                                <TableCurrency assets={assets}/>
                                <PaginationBlock/>
                            </>
                            :
                            <Loader/>}
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

export default Main;