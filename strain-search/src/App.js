import React from 'react';

import {BrowserRouter , Route , Switch} from "react-router-dom";

import Welcome from './components/Welcome.js';

import Search from './components/SearchBox.js';


function App() {
  return (
    <BrowserRouter>
    
      <Switch>

        <Route exact path={"/"} component={Welcome}></Route>
        <Route exact path={"/search"} component={Search}></Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
