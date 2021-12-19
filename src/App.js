import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Components/Contact';
import AddList from './Components/AddList';
import Home from './Components/Home';
import AddDetails from './Components/AddDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/addList">
            <AddList></AddList>
          </Route>
          <Route path="/addDetails/:Location">
            <AddDetails></AddDetails>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;