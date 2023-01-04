import './App.scss';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Item from './pages/Item/Item';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
