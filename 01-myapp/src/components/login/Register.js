import React, { Component } from 'react';

export class Login extends Component {
  state = {
    username:'',
    password:'',
    role: '',
  };
  
  handleSubmit = event => {
      event.preventDefault();
      
  }

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
  }
  
render() {
    return (
    <>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username"/>
                <input 
                value={this.state.username} 
                onChange={this.handleInputChange} 
                name='username' 
                type='text'
                placeholder='Username'
                />
            </div>
            <div>
                <label htmlFor="password"/>
                <input 
                value={this.state.password} 
                onChange={this.handleInputChange} 
                name='password' 
                type='password'
                placeholder='Password'
                />
            </div>
            <div>
                <label htmlFor="role"/>
                <input 
                value={this.state.role} 
                onChange={this.handleInputChange} 
                name='role' 
                type='text'
                placeholder='Role'
                />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
    )
}
}

export default Login
