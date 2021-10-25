import React from 'react';
import {Pagination} from "react-bootstrap";

const pages = Array.from(Array(10).keys()).map(x => x+1);

const PaginationBlock = () => {

    return (
        <Pagination>
            {pages.map((page) =>
                <Pagination.Item key={page} >
                    {page}
                </Pagination.Item>)}
        </Pagination>
    )
};

export default PaginationBlock;