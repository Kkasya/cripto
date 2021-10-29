import React from "react";
import {roundSeparateNumber} from "../../../common/utils";
import {Badge} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteCurrentCurrency} from "../../../store/walletReducer";

const ItemTableWalletCurrency = ({currency, index}) => {
    const dispatch = useDispatch();

    const deleteCurrent = () => {
        dispatch(deleteCurrentCurrency(currency));
    };
               return (
            <>
                <tr >
                    <td>{index}</td>
                    <td>{currency.name}</td>
                    <td>${roundSeparateNumber(currency.price)}</td>
                    <td>{currency.count}</td>
                    <td>${roundSeparateNumber(currency.summary)}</td>
                    <td className="centeredAllBlock button" onClick={deleteCurrent}><Badge bg="info">-</Badge></td>
                </tr>

            </>
        );
    };

export default ItemTableWalletCurrency;