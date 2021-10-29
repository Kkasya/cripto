import React from "react";
import {roundSeparateNumber} from "../../../common/utils";
import {Badge} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addCurrentCurrency, setIsOpenAddingWallet} from "../../../store/walletReducer";
import {useHistory} from "react-router";

const ItemTableCurrency = ({asset}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const openAddToWallet = () => {
        dispatch(setIsOpenAddingWallet(true));
        dispatch(addCurrentCurrency(asset));
    };

    const gotoCurrentCurrency = (e) => {
        if (!e.target.classList.contains('badge')) {
            history.push(`cripto/currency/${asset.id}`);
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