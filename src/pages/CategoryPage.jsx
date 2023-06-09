import React from 'react';
import './ProductPage.css';
import CategoryTabel from '../components/CategoryTabel';



function CategoryPage(props) {
    return (
        <div className='productPage'>
            <div className='productPageTitle'>
                Category Page
            </div>        
            <CategoryTabel/>

        </div>
    );
}

export default CategoryPage;