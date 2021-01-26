import React, { useCallback, useContext, useEffect, useState } from 'react';

import { FilterContext } from '../../context/FilterContext';

import './style.css';

function SearchInput() {
    const [{search}, , , setSearch] = useContext(FilterContext);
    const [value, setValue] = useState(search);

    const handleChange = ({target: {value}}) => {
        setValue(value);
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => setSearch(value), 500);
        return () => clearTimeout(timeOutId);
    }, [value]);
    
    console.log('search', search)
    console.log('value', value)
    return (
        <div className="search">
            <input type="text" placeholder="Пошук" value={value} onChange={handleChange} />
            <div><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg></div>
        </div>
    );
}

export default SearchInput;
