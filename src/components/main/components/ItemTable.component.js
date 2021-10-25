import React from "react";
import {roundSeparateNumber} from "../../../common/utils";

const ItemTableCurrency = ({asset}) => {

	return (
		<tr>
			<td>{asset.rank}</td>
			<td>{asset.name}</td>
			<td>${roundSeparateNumber(asset.priceUsd)}</td>
			<td>${roundSeparateNumber(asset.marketCapUsd)}</td>
			<td>${roundSeparateNumber(asset.vwap24Hr)}</td>
			<td>${roundSeparateNumber(asset.supply)}</td>
			<td>${roundSeparateNumber(asset.volumeUsd24Hr)}</td>
			<td>{roundSeparateNumber(asset.changePercent24Hr)}%</td>
		</tr>
	)
};

export default ItemTableCurrency;