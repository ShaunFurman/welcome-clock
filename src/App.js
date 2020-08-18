import React from 'react';
import { Route } from 'react-router-dom';


import './App.css';

import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import noFo from './components/404/404'; 

function App() {
  return (
    <div className="App">
            
    <Navigation />
      <Route 
      path="/welcome/:name" 
     
      render={(props) => <Welcome {...props.match.params} />} 
      />
      <Route
          exact
          path="/welcome"
          render={(props) => <Welcome {...props} name="Haus" />}
        />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route
        path="/" component={noFo} />
      
      
      
      
   
    </div>
  );
}

export default App;
 