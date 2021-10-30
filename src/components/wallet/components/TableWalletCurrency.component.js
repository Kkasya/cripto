import React from 'react';
import Table from "react-bootstrap/Table";
import ItemTableWalletCurrency from "./ItemTableWalletCurrency";
import {useSelector} from "react-redux";

const TableWalletCurrency = () => {
    const {currency} = useSelector(state => state.wallet);

    return (
        <>
            {currency.length ?
                <Table borderless hover responsive="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Summary</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {currency.map((item, index) =>
                        <ItemTableWalletCurrency key={index} currency={item} index={index + 1}/>)
                    }
                    </tbody>
                </Table>
                :
                <p className="centeredRows">No currency</p>}
        </>

    )
};

export default TableWalletCurrency;