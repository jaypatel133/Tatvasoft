import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, Outlet } from "react-router-dom";


function MainPage(props) {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainPage;