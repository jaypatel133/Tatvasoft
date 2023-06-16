import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import EditProduct from './pages/EditProduct';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import ProductListPage from './pages/ProductListPage';
import UserPage from './pages/UserPage';
import EditUser from './pages/EditUser';
import EditCategory from './pages/EditCategory'
import { useSelector} from 'react-redux';



function MainRouter(props) {
    const user = useSelector((state) => state.user.userDetail)

    return (
        <Routes>
            <Route exact path="/" element={<MainPage/>} >
            <Route index element={ user == null ? <Navigate to='/login'/> : <Navigate to='/productListPage'/>} />
            <Route exact path="login" element={user == null ? <Login/> : <Navigate to='/productListPage'/>} />
            <Route exact path="register" element={user == null ? <Register/> : <Navigate to='/productListPage'/>} />
            <Route exact path="editProduct" element={user !== null ? <EditProduct/> : <Navigate to='/login'/> } />
            <Route exact path="editUser" element={user !== null ? <EditUser/> : <Navigate to='/login'/> } />
            <Route exact path="editCategory" element={user !== null ? <EditCategory/> : <Navigate to='/login'/> } />
            <Route exact path="cartPage" element={user !== null ? <CartPage/> : <Navigate to='/login'/>} />
            <Route exact path="productPage" element={user !== null ? <ProductPage/> : <Navigate to='/login'/>} />
            <Route exact path="productListPage" element={user !== null ? <ProductListPage/> : <Navigate to='/login'/>} />
            <Route exact path="userPage" element={user !== null ? <UserPage/> : <Navigate to='/login'/>} />
            <Route exact path="categoryPage" element={user !== null ? <CategoryPage/> : <Navigate to='/login'/>} />
            {/* <Route exact path="home" element={user !== null ? <Home/> : <Navigate to='/login'/>} /> */}
        </Route>
        
        </Routes>
    );
}

export default MainRouter;