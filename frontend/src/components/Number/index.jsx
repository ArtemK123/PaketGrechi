import React, { useContext, useRef, useEffect } from 'react';

import { FilterContext } from '../../context/FilterContext';
import './style.css';

const defaultNumber = 5;
const minNumber = 1;

function Number() {
    const [ { number }, setNumber ] = useContext(FilterContext);
    const inputEl = useRef(null);
    useEffect(() => {
        inputEl.current.focus();
    }, []);
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
                ref={inputEl}
                value={number} 
                onChange={selectNumber} 
                onClick={() => number || setNumber(defaultNumber)}
            />
        </div>
    )
}

export default Number;