import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import {FeaturedProducts} from './components/FeaturedProducts'
import {NewProducts} from './components/NewProducts'
function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path= '/' element={<Home></Home>}></Route>
        <Route path= 'About' element={<About></About>}></Route>
        <Route path= 'order-summary' element={<OrderSummary></OrderSummary>}></Route>
        <Route path= 'products' element={<Products></Products>}>
          <Route path ='featured' element={<FeaturedProducts></FeaturedProducts>}></Route>
          <Route path ='new' element={<NewProducts></NewProducts>}></Route>
        </Route>
        <Route path= '*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
