import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from '../Context/authContext';


function MainPage(props) {
    // const navigate = useNavigate();
    // const user = useAuth();

    // useEffect(()=>{
    //     if (user === null | user === {})
    //     {
    //         navigate("/login")
    //     }
    // },[user])

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainPage;