import React from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../../store/assetReducer";

const pages = Array.from(Array(10).keys()).map(x => x+1);

const PaginationBlock = () => {
    const dispatch = useDispatch();
    const {activePage} = useSelector(state => state.assets);

    return (
        <Pagination className="centeredBlock flex-wrap">
            {pages.map((page) =>
                <Pagination.Item key={page} active={page === activePage} onClick={()=>dispatch(setPage(page))} >
                    {page}
                </Pagination.Item>)}
        </Pagination>
    )
};

export default PaginationBlock;