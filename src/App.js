import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Casino from './Pages/Casino';
import Products from './Pages/Products';
import Rewards from './Pages/CasinoRewards';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import AppContainer from './Pages/Casino';
import Cart from './Pages/Cart';
import Poker from './Pages/Poker/Poker'

function App() {
  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/casino' component={AppContainer} />
          <Route path='/products' component={Products} />
          <Route path='/casinoRewards' component={Rewards} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>

  );
}

export default App;