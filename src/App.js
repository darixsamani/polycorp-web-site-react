import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/About/About';
import Header from './components/Header';
import NotFoundPage from './components/pages/four-o-four/NotFoundPage';
import FreeEstimate from './components/pages/FreeEstimate/FreeEstimate';

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/About' component={About} />
      <Route path='/FreeEstimate' component={FreeEstimate} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
