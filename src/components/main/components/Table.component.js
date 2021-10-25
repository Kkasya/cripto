import React from 'react';
import Table from "react-bootstrap/Table";
import ItemTableCurrency from "./ItemTable.component";

const TableCurrency = ({assets}) => {
	return (
		<Table striped bordered hover responsive="lg" className="table__wrapper" >
			<thead >
			<tr >
				<th >Rank</th >
				<th >Name</th >
				<th >Price</th >
				<th >Market Cap</th >
				<th >VWAP(24Hr)</th >
				<th >Supply</th >
				<th >Volume(24Hr)</th >
				<th >Change(24Hr)</th >
			</tr >
			</thead >
			<tbody >
			{assets.map((asset) =>
				<ItemTableCurrency key={asset.id} asset={asset} />)
			}
			</tbody >
		</Table >

	)
};

export default TableCurrency;