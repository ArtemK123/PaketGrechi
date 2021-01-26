import React, { useContext } from 'react';

import { FilterContext } from '../../context/FilterContext';

import './style.css';

function Sort() {
    const [ { sortDirection }, ,setSortDirection ] = useContext(FilterContext);
    const selectDirection = ({target: {value}}) => {
        setSortDirection(value);
    };
    return (
        <select value={sortDirection} onChange={selectDirection}>
            <option value='asc'>
                Від дешевих до дорогих
            </option>
            <option value='desc'>
                Від дорогих до дешевих
            </option>
        </select>
    );
}

export default Sort;