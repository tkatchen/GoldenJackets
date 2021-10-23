import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Casino from './Pages/Casino';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import './Pages/Products.css'

function App() {
  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/casino' component={Casino} />
          <div className='containter'>
            <Route path='/products' component={Products} />
          </div>
          <Route path='/login' component={Login} />
          <Route path='/contact' component={Contact} />

        </Switch>
      </Router>

  );
}

export default App;