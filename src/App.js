import React from "react";
import { Link, Switch, Redirect, Route } from "react-router-dom";
import Aux from "./hoc/Auxiliary/Auxiliary";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Details from "./containers/Details/Details";
import "./App.css";

function App(props) {
  return (
    <Aux>
      <Layout>
        <Switch>
          <Route path='/movie/details/:id' render={() => <Details />} />
          <Route path='/' render={() => <Home />} exact />
        </Switch>
      </Layout>
    </Aux>
  );
}

export default App;
