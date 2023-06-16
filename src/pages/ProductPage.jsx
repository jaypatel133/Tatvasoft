import React from 'react';
import './ProductPage.css';
import ProductTabel from '../components/ProductTabel';


function ProductPage(props) {
    
    return (
        <div className='productPage'>
            <div className='productPageTitle'>
                Book Page
            </div>        
            <ProductTabel/>

        </div>
    );
}

export default ProductPage;