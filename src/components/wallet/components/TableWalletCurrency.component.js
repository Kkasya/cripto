import React from 'react';
import Table from "react-bootstrap/Table";
import ItemTableWalletCurrency from "./ItemTableWalletCurrency";
import {useSelector} from "react-redux";

const TableWalletCurrency = () => {
    const {currency} = useSelector(state => state.wallet);

    return (
        <Table borderless hover responsive="sm" >
            <thead >
            <tr >
                <th >#</th >
                <th >Name</th >
                <th >Price</th >
                <th >Count</th >
                <th >Summary</th >
                <th ></th >
            </tr >
            </thead >
            <tbody >
            {currency.map((item, index) =>
                <ItemTableWalletCurrency key={item.id} currency={item} index={index+1} />)
            }
            </tbody >
        </Table >

    )
};

export default TableWalletCurrency;