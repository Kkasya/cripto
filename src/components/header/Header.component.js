import React from 'react';
import {Badge, ListGroup, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {roundSeparateNumber} from "../../common/utils";

const Header = () => {
    const {assets} = useSelector(state => state.assets);
    const popularCripto = assets.slice(0, 3);
    const dispatch = useDispatch();

    const openWallet = () => {
        dispatch({type: "SET_IS_OPEN_WALLET", payload: true});
    }

    return (
        <div className="header header__content">
            <ListGroup horizontal className="popularCripto__content">
                {popularCripto.map((cripto) =>
                    <ListGroup.Item className="border-0 popularCripto__item" key={cripto.symbol}>
                        <span className="popularCripto__name">{cripto.name} ({cripto.symbol})</span>
                        <Badge bg="primary">${roundSeparateNumber(cripto.marketCapUsd)}</Badge>
                    </ListGroup.Item>
                )}
            </ListGroup>
            <Button variant="info" onClick={openWallet}>Wallet</Button>
        </div>
    )
};

export default Header;