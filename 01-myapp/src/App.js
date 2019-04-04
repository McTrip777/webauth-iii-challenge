import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginNav from './components/login/loginNav'

import Home from './components/login/Home';
import LoginPage from './components/login/LoginPage';
import Register from './components/login/Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <LoginNav/>
        </header>
        <main>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={Register} />
        </main>
      </div>
    );
  }
}
// const Auth = withRouter(authenticate()());

// export default withRouter(App);
export default App;
