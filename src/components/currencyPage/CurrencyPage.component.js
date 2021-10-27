import React, {useEffect} from 'react';
import {getDateTime, getDetails, roundSeparateNumber} from "../../common/utils";
import Chart from "../main/components/Chart.component";
import Loader from "../main/components/Loader.component";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getCurrentCripto} from "../../common/fetch";
import {Badge, Button} from "react-bootstrap";

const CurrencyPage = () => {
        const {assets} = useSelector(state => state.assets);
        const {assets24h, details} = useSelector(state => state.details);
        const {now, startDay, start24h, date} = getDateTime();
        const {id} = useParams();
        const dispatch = useDispatch();
        const getAsset = () => {
            return assets.find((item) => item.id === id);
        };

        const asset = getAsset();

        useEffect(() => {
            (async () => {
                let assetsFetch = 0;
                while (!assetsFetch) assetsFetch = await getCurrentCripto(asset.id, startDay, now.getTime());
                let assets24h = 0;
                while (!assets24h) assets24h = await getCurrentCripto(asset.id, start24h.getTime(), now.getTime());
                dispatch({type: "ADD_ASSETS_24h", payload: assets24h.data});
                dispatch({type: "ADD_DETAILS", payload: getDetails(assetsFetch.data)});
            })();
        }, [id]);


    const openAddToWallet = () => {
        dispatch({type: "SET_IS_OPEN_ADDING_WALLET", payload: true});
        dispatch({type: "ADD_CURRENT_CURRENCY", payload: asset});
    };

        return (
            <div className="card__wrapper">
                {Object.keys(details).length ?
                    <div className="card__content">
                        <div className="card__info">
                            <img
                                src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`}
                                alt="currency"/>
                            <div className="card__content__item">
                                <span> {asset.name} ({asset.symbol})</span>
                                <span>{date}</span>
                            </div>
                        </div>
                        <div className="card__content__item">
                            <span>HIGH: ${roundSeparateNumber(details.max)}</span>
                            <span>LOW: ${roundSeparateNumber(details.min)}</span>
                            <span>AVERAGE: ${roundSeparateNumber(details.average)}</span>
                        </div>
                        <div className="card__content__item">
                            <span className="button button__add"><Badge  bg="info" onClick={openAddToWallet}>+</Badge></span>
                        </div>
                    </div>
                    :
                    <Loader/>
                }

                {assets24h ?
                    <Chart assets24h={assets24h} max={details.max} min={details.min}/>
                    :
                    <Loader/>}

                <Link to='/'>
                    <div  className="centeredBlock" ><Button>Back</Button> </div>
                    </Link>
            </div>
        )
    }
;

export default CurrencyPage;