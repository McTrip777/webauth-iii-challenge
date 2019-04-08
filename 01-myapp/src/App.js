import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginNav from './components/login/loginNav';

import Home from './components/login/Home';
import LoginPage from './components/login/LoginPage';
import Register from './components/login/Register';
import User from './components/Users/User';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <LoginNav />

        </header>
        <main>
          <Route exact path='/' render={props => (<Home {...props}/>)}/>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={Register} />
          <Route path='/users' component={User} />
        </main>
      </div>
    );
  }
}

export default App;
