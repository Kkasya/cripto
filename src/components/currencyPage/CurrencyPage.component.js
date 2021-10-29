import React, {useEffect} from 'react';
import {getDateTime, roundSeparateNumber} from "../../common/utils";
import Chart from "../main/components/Chart.component";
import Loader from "../main/components/Loader.component";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { getCurrentCripto} from "../../common/fetch";
import {Badge, Button} from "react-bootstrap";
import {addCurrentCurrency, setIsOpenAddingWallet} from "../../store/walletReducer";

const CurrencyPage = () => {
        const {allAssets} = useSelector(state => state.assets);
        const {assets24h, details} = useSelector(state => state.details);
        const {now, startDay, start24h, date} = getDateTime();
        const {id} = useParams();
        const dispatch = useDispatch();
        const getAsset = () => {
            return allAssets.find((item) => item.id === id);
        };

        const asset = getAsset();

        useEffect(() => {
            let interval1 = 0;
            let interval2 = 0;
            if(allAssets.length) {
                 interval2 = setInterval(() => dispatch(getCurrentCripto(asset.id, start24h.getTime(), now.getTime())), 2000);
                 interval1 = setInterval(() => dispatch(getCurrentCripto(asset.id, startDay, now.getTime(), true)), 2000);
            }
            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
            };
        }, [id, allAssets]);

        // useEffect(() => {
        //     const interval = setInterval(() => dispatch(getAllCripto()), 2000);
        //     return () => clearInterval(interval);
        // }, []);

        const openAddToWallet = () => {
            dispatch(setIsOpenAddingWallet(true));
            dispatch(addCurrentCurrency(asset));
        };

        return (
            <div className="card__wrapper">
                {Object.keys(details).length  ?
                    <div className="card__content">
                        <div className="card__info">
                            <img
                                src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`}
                                alt="currency"
                                className="card__img"/>
                            <div className="card__data">
                                <span> {asset.name} ({asset.symbol})</span>
                                <span>{date}</span>
                            </div>
                        </div>
                        <div className="card__data">
                            <span>HIGH: ${roundSeparateNumber(details.max)}</span>
                            <span>LOW: ${roundSeparateNumber(details.min)}</span>
                            <span>AVERAGE: ${roundSeparateNumber(details.average)}</span>
                        </div>
                        <div className="card__data">
                            <span className="button button__add"><Badge bg="info" onClick={openAddToWallet}>+</Badge></span>
                        </div>
                    </div>
                    :
                    <Loader/>
                }
                <Chart assets24h={assets24h} max={details.max} min={details.min}/>
                <Link to='/'>
                    <div className="centeredBlock"><Button>Back</Button></div>
                </Link>
            </div>
        )
    }
;

export default CurrencyPage;