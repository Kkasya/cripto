import React from "react";
import {getDateTime, getDetails, roundSeparateNumber} from "../../../common/utils";
import {getCurrentCripto} from "../../../common/fetch";
import {useDispatch, useSelector} from "react-redux";
import Chart from "./Chart.component";
import Loader from "./Loader.component";

const ItemTableCurrency = ({asset}) => {
    const dispatch = useDispatch();
    const {assets24h, details, isOpen} = useSelector(state => state.details);
    const {now, startDay, start24h, date} = getDateTime();

    const openDetails = () => {
        (async () => {
            if (isOpen === asset.id) {
                dispatch({type: "SET_IS_OPEN", payload: ''})
            } else {
                dispatch({type: "SET_IS_OPEN", payload: asset.id});
                let assetsFetch = 0;
                while (!assetsFetch)  assetsFetch = await getCurrentCripto(asset.id, startDay, now.getTime());
                let assets24h = 0;
                while (!assets24h) assets24h = await getCurrentCripto(asset.id, start24h.getTime(), now.getTime());
                dispatch({type: "ADD_ASSETS_24h", payload: assets24h.data});
                dispatch({type: "ADD_DETAILS", payload: getDetails(assetsFetch.data)});
            }
        })();
    };

    return (
        <>
            <tr onClick={openDetails}>
                <td>{asset.rank}</td>
                <td>{asset.name}</td>
                <td>${roundSeparateNumber(asset.priceUsd)}</td>
                <td>${roundSeparateNumber(asset.marketCapUsd)}</td>
                <td>${roundSeparateNumber(asset.vwap24Hr)}</td>
                <td>${roundSeparateNumber(asset.supply)}</td>
                <td>${roundSeparateNumber(asset.volumeUsd24Hr)}</td>
                <td>{roundSeparateNumber(asset.changePercent24Hr)}%</td>
            </tr>
            {(isOpen === asset.id) && <>
                {Object.keys(details).length ?
                    <>
                        <tr className="subTable__row">
                            <td colSpan={2} rowSpan={2}>
                                <img
                                    src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`}/>
                            </td>
                            <td colSpan={2}>
                                {asset.name} ({asset.symbol})
                            </td>
                            <td colSpan={2}>HIGH: ${roundSeparateNumber(details.max)}</td>
                            <td colSpan={2} rowSpan={2} className="align-middle">AVERAGE:
                                ${roundSeparateNumber(details.average)}</td>
                        </tr>
                        <tr className="subTable__row">
                            <td colSpan={2}>{date}</td>
                            <td colSpan={2}>LOW: ${roundSeparateNumber(details.min)}</td>
                        </tr>
                        <tr >
                            <td colSpan={8} className="text-center">
                                {assets24h ?
                                    <Chart assets24h={assets24h} max={details.max} min={details.min}/>
                                    :
                                    <Loader/>}
                            </td>
                        </tr>
                    </>
                    :
                    <tr>
                        <td colSpan={8}><Loader/></td>
                    </tr>}
            </>
            }
        </>
    );
}
;

export default ItemTableCurrency;