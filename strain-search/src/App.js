import React from 'react';

import {BrowserRouter , Route , Switch} from "react-router-dom";

import Welcome from './components/Welcome.js'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    
      <Switch>

        <Route path="/" component={Welcome}></Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
