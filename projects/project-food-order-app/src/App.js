import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true)
  }
  const hideCartHandler = () => {
    setCartVisible(false)
  }

  return (
    <CartProvider>
      {cartVisible && (<Cart onHideCart={hideCartHandler}/>)}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;

