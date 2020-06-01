import React from 'react';

import {BrowserRouter , Route , Switch} from "react-router-dom";

import Welcome from './components/Welcome.js';

import Search from './components/SearchBox.js';

import Dashboard from './components/Dashboard.js';


function App() {
  return (
    <BrowserRouter>
    
      <Switch>

        <Route exact path={"/"} component={Welcome}></Route>
        <Route exact path={"/search"} component={Search}></Route>
        <Route exact path={"/dash"} component={Dashboard}></Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
