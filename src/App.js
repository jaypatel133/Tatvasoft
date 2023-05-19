import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Header/>} >
          <Route index element={<Login/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="register" element={<Register/>} />
        </Route>
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
