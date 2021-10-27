import React, {useState} from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const pages = Array.from(Array(10).keys()).map(x => x+1);

const PaginationBlock = () => {
    const {activePage} = useSelector(state => state.assets);
    const dispatch = useDispatch();

    const setPage = (page) => {
        dispatch({type: "SET_PAGE", payload: page});
    }

    return (
        <Pagination className="centeredBlock flex-wrap">
            {pages.map((page) =>
                <Pagination.Item key={page} active={page === activePage} onClick={()=>setPage(page)} >
                    {page}
                </Pagination.Item>)}
        </Pagination>
    )
};

export default PaginationBlock;