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
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./providers/AuthProvider";
import EnterData from "./components/enterData/EnterData";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Layout>
            <ToastContainer
              style={{ fontSize: "1.7rem" , right:0 , zIndex:"1000000"}}
            />
            <Switch>
              <Route path="/enterData" component={EnterData}/>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/menu" component={MenuPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/" exact={true} component={HomePage} />
            </Switch>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
