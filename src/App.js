import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/" exact={true} component={HomePage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
