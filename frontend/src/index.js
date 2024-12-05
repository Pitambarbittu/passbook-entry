import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddTransaction from './addTransaction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
  <Route exact path= "/">
  <React.Fragment>
  <App />
  </React.Fragment>
  </Route>
  <Route exact path = "/add">
  <React.Fragment>
  <AddTransaction/>
  </React.Fragment>
    
  </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
