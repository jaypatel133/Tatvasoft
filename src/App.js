import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import EditProduct from './pages/EditProduct';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<MainPage/>} >
          <Route index element={<Login/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="register" element={<Register/>} />
          <Route exact path="editProduct" element={<EditProduct/>} />
          <Route exact path="cartPage" element={<CartPage/>} />
        </Route>
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
