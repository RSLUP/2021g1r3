import React from 'react';
import './App.css';
import LogIn from './Pages/LogInPage/LogIn';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import SignUp from './Pages/LogInPage/SignUp';



function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/LogIn' component={LogIn} />
      <Route path='/SignUp' component={SignUp}/>
      </Switch>
    </Router>  
    </>
  );
}

export default App;
