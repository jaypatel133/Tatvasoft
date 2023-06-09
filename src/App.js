import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Context/authContext';
import MainRouter from './MainRouter';
import { CartProvider } from './Context/cartContext';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ToastContainer/>
            <BrowserRouter>
              <MainRouter/>
            </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
