import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
      
    </div>
  );
}

export default App;
