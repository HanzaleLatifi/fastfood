import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartProvider from "./providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuPage from "./pages/MenuPage";


function App() {
  return (
    <>
      <CartProvider>
        <Layout>
          <ToastContainer style={{fontSize:'1.7rem' , fontFamily:'sans-serif'}}/>
          <Switch>
            <Route path="/menu" component={MenuPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/" exact={true} component={HomePage} />
          </Switch>
        </Layout>
      </CartProvider>
    </>
  );
}

export default App;
