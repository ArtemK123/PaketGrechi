import React, { useContext } from 'react';

import { FilterContext } from '../../context/FilterContext';
import './style.css';

const defaultNumber = 3;
const minNumber = 1;

function Number() {
    const [ { number }, setNumber ] = useContext(FilterContext);
    const selectNumber = ({target: {value}}) => {
        setNumber(value);
    };
    return (
        <div className='number'>
            <button 
                onClick={() => setNumber(false)}>
                Всі
            </button>
            <input 
                type="number"
                min={minNumber}
                value={number} 
                onChange={selectNumber} 
                onClick={() => number || setNumber(defaultNumber)}
            />
        </div>
    )
}

export default Number;