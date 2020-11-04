import React from 'react';
import './App.css';
import Home from './Component/pages/Home'
import NavBar from "./Component/NavBar"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends React.Component {

render() {
  return (
    <>
    <Router>
    <Switch>
          <Route path='/' exact component={Home} />
          </Switch>
          <NavBar />
    </Router>
      
    </>
  );
}
}
export default App;
