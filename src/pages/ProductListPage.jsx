import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
    return (
        <div className='productPage'>
            <div className='productPageTitle'>
                Product Listing
            </div>
            <ProductCard/>
        </div>
    );
};

export default ProductListPage;