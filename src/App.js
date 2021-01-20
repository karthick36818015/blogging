import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import ContactUs from './containers/ContactUs'
import Posts from './containers/Posts'
import quiz from './containers/quiz'
import SimpleSlider from './components/slick';


function App() {
  return (

    <Router>
      <div className="App">
      <Header/>
      <Hero/>  
       <Route path="/quiz" component={quiz}/>
      <Route path="/Home" component={Home}/>
      <Route path="/ContactUs" component={ContactUs}/>
      <Route path="/Posts" component={Posts}/>
      </div>
    </Router>
    
    
    
    
    
  );
}

export default App;
