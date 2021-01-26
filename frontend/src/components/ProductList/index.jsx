import React, { useEffect, useState, useContext, useMemo } from 'react';

import Product from '../Product';
import Loader from '../Loader';
import { FilterContext } from '../../context/FilterContext';
import { loadData, getN, sort } from '../../services/data';

import './style.css';

function ProductList() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const [{ number, sortDirection }] = useContext(FilterContext);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await loadData();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const cheapest = useMemo(() => {
        const sorted = sort(data, sortDirection);
        return number ? getN(sorted, number) : sorted;
    }, [data, number, sortDirection]);

    return isLoading ? 
        <Loader isLoading={isLoading} /> :
        <div className='products'>
            {cheapest.map(value => <Product key={value.id} {...value} />)}
        </div>
}

export default ProductList;