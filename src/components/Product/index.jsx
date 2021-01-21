import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Product({src, name, store, link, price}) {
    return (
        <div className='product'>
          <img src={src} alt='product' />
          <p>{name}</p>
          <a href={link}>{store}</a>
          <p className='product-price'>{price} ₴</p>
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