import '../../sass/abstracts/_variables.scss';
import Main from "../main/Main.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header/Header.component";
import React from "react";
import Wallet from "../wallet/Wallet.component";
import AddingCurrency from "../main/components/AddingCurrency.component";
import {BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import CurrencyPage from "../currencyPage/CurrencyPage.component";
import {useSelector} from "react-redux";

const App = () => {
    const {assets} = useSelector(state => state.assets);

    return (
        <HashRouter basename="/cripto" >
            <Header/>
            <Wallet/>
            <AddingCurrency/>
            <Switch>
                {assets.map((item) => (
                    <Route
                        key={item.id}
                        path={"/currency/:id"}
                        render={() => <CurrencyPage/>}
                    />
                ))}
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
