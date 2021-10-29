import React, {useEffect} from 'react';
import {Badge, ListGroup, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {roundSeparateNumber} from "../../common/utils";
import {setIsOpenWallet} from "../../store/walletReducer";
import {getAllCripto, getCripto, getCurrentCripto} from "../../common/fetch";

const Header = () => {
    const {allAssets} = useSelector(state => state.assets);
    const popularCripto = allAssets.slice(0, 3);
    const dispatch = useDispatch();
    const {currency, changeWallet} = useSelector(state => state.wallet);

    useEffect(() => {
        localStorage.setItem('currency', JSON.stringify(currency ))
    }, [currency]);

    useEffect(() => {
        localStorage.setItem('changeWallet', JSON.stringify(changeWallet ))
    }, [changeWallet]);

    useEffect(() => {
        localStorage.setItem('allAssets', JSON.stringify(allAssets ))
    }, [allAssets]);

    useEffect(() => {
        const interval = setInterval(() => dispatch(getAllCripto()), 10000);
        return () =>  clearInterval(interval);
    }, []);

    const summaryCurrency = () => {
        let summary = 0;
        [...currency].forEach((item) => {
            summary += item.summary;
        });
        return summary;
    };

    const summary = summaryCurrency();

    const changePercent = () => {
        const prevSummary = summary === changeWallet ? changeWallet : summary - changeWallet;
        return changeWallet ? (changeWallet * 100 / prevSummary).toFixed() : 0
    };

    const openWallet = () => {
        dispatch(setIsOpenWallet(true));
    };

    return (
        <div className="header header__content">
            {allAssets && <ListGroup horizontal className="popularCripto__content">
                {popularCripto.map((cripto) =>
                    <ListGroup.Item className="border-0 popularCripto__item" key={cripto.symbol}>
                        <span className="popularCripto__name">{cripto.name} ({cripto.symbol})</span>
                        <Badge bg="primary">${roundSeparateNumber(cripto.marketCapUsd)}</Badge>
                    </ListGroup.Item>
                )}
            </ListGroup>}
            <Button variant="info" onClick={openWallet} className="wallet__info">
                <span>Wallet: </span>
                <span>{roundSeparateNumber(summary)} USD </span>
                <span>{changeWallet < 0 ? `-${roundSeparateNumber(changeWallet)}` : `+${roundSeparateNumber(changeWallet)}`}
                ({changePercent()} %) </span>
            </Button>
        </div>
    )
};

export default Header;