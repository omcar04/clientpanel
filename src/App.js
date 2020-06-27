import React from "react";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import EditClient from "./components/clients/EditClient";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import ClientDetails from "./components/clients/ClientDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar></AppNavbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route exact path="/client/add" component={AddClient}></Route>
              <Route
                exact
                path="/client/edit/:id"
                component={EditClient}
              ></Route>
              <Route exact path="/client/:id" component={ClientDetails}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
