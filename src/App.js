import ProductHeader from './components/products/ProductHeader';
import ProductMain from './components/products/ProductMain';
import ProductBasket from './components/products/ProductBasket';
import productsdata from './data/productdata';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState } from 'react';

function App() {
  const { products } = productsdata;
  
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
      <ProductHeader countCartItems={cartItems.length}></ProductHeader>
      <Routes>
        <Route path="/" element={<ProductMain products={products} onAdd={onAdd}></ProductMain>}></Route>
        <Route path="/ProductBasket" element={<ProductBasket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
  ></ProductBasket> }></Route>
      </Routes>
      </Router>   
     </div>
 );
}

export default App;
