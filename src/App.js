import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import ContactUs from './pages/contactUs';
function App() {
  return (
     
      <Router>
        
        <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contactUs' component={ContactUs}/>
        <Route path='/services' component={Services}/>
     </Switch>
      </Router>
      
    
  );
}

export default App;
