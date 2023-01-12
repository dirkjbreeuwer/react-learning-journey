import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const CartWindow = (props) => {
  const [cartWindowState, setCartWindowState] = useState(false);
  
  if (cartWindowState === true) {
      console.log("Cart is shown");
      return <Cart/>
  }
  if (cartWindowState === false){
    console.log("Cart is hidden");
  }
  return (
    <Fragment>
      <Header cartWindowState={cartWindowState} setCartWindowState={setCartWindowState} />
    </Fragment>
  );
};

function App() {
  return (
    <Fragment>
      <CartWindow/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;

