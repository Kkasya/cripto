import React from "react";
import {roundSeparateNumber} from "../../../common/utils";
import {Badge} from "react-bootstrap";
import {useDispatch} from "react-redux";

const ItemTableCurrency = ({asset}) => {
    const dispatch = useDispatch();

    const openAddToWallet = () => {
        dispatch({type: "SET_IS_OPEN_ADDING_WALLET", payload: true});
        dispatch({type: "ADD_CURRENT_CURRENCY", payload: asset});
    };

    const gotoCurrentCurrency = (e) => {
        if (!e.target.classList.contains('badge')) {
            window.location.href = `currency/${asset.id}`
        }
    };

    return (
        <tr onClick={gotoCurrentCurrency} className="table__row">
            <td> {asset.rank} </td>
            <td> {asset.name}</td>
            <td>${roundSeparateNumber(asset.priceUsd)}</td>
            <td> ${roundSeparateNumber(asset.marketCapUsd)}</td>
            <td>${roundSeparateNumber(asset.vwap24Hr)}</td>
            <td>${roundSeparateNumber(asset.supply)}</td>
            <td>${roundSeparateNumber(asset.volumeUsd24Hr)}</td>
            <td>{roundSeparateNumber(asset.changePercent24Hr)}%</td>
            <span className="button button__add"><Badge bg="info" onClick={openAddToWallet}>+</Badge></span>
        </tr>
    );
};

export default ItemTableCurrency;