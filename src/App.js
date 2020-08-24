import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

// import './App.css';

import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import NoMatch from './components/404/404'; 


function App() {
  return (
    <div className="App">
            
    <Navigation />
    <Switch>
      <Route 
      path="/welcome/:name" 
     
      render={(props) => <Welcome {...props.match.params} />} 
      />
      <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Haus" />}
       />
      <Route path="/clock" component={Clock}
       />
      <Route path="/contact" component={Contact} />
      
     <Route  component={NoMatch} />
      
      
      </Switch>
      
   
    </div>
  );
}

export default App;
 