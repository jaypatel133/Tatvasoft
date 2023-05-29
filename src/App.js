import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import EditProduct from './pages/EditProduct';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<MainPage/>} >
          <Route index element={<Login/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="register" element={<Register/>} />
          <Route exact path="editProduct" element={<EditProduct/>} />
          <Route exact path="cartPage" element={<CartPage/>} />
          <Route exact path="productPage" element={<ProductPage/>} />
          <Route exact path="productListPage" element={<ProductListPage/>} />
        </Route>
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
