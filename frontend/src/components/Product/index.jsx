import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Product({src, name, store, link, price}) {
    const [integer, fraction] = price.split('.');
    return (
        <div className='product'>
            <img src={src} alt='product' />
            <p className='name'>{name}</p>
            <a href={link}>{store}</a>
            <div className='price'>
                <div className='integer'>{integer}</div>
                <div className='fraction'>{fraction}</div>
                <div className='currency'>₴</div>
            </div>
        </div>
    )
}

Product.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.number
};

Product.defaultProps = {
    src: '',
    name: '',
    link: '',
    price: 0
};

export default Product;