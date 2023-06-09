import React from 'react';
import ProductCardBox from '../components/ProductCardBox';



const ProductListPage = () => {
    return (
        <div className='productPage'>
            <div className='productPageTitle'>
                Product Listing
            </div>
            <ProductCardBox/>
        </div>
    );
};

export default ProductListPage;