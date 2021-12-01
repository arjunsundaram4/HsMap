import React from 'react';
import _ from 'lodash';
import './Pagination.css';

const Pagination = (props) => {

    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <div className="pagination">
            {pages.map(page => (
                <div href={null} key={page}
                    onClick={() => onPageChange(page)}
                    className={`pageItem ${page === currentPage ? 'active' : ''}`}>
                    {page}
                </div>
            ))}
        </div>
    )
}

export default Pagination;
