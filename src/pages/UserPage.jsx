import React from 'react';
import './ProductPage.css';
import UserTabel from'../components/UserTabel'



function UserPage(props) {
    return (
        <div className='productPage'>
            <div className='productPageTitle'>
                User Page
            </div>        
            <UserTabel/>

        </div>
    );
}

export default UserPage;