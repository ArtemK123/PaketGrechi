import React, { useEffect, useState } from 'react';

import Product from '../Product';
import { loadData, getCheapest } from '../../services/data';

import './style.css';

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = loadData();
        const cheapest = getCheapest(data, 4);
        setData(cheapest);
    }, []);

    return (
        <div className='products'>
            {data.map(value => <Product key={value.id} {...value} />)}
        </div>
    );
}

export default ProductList;