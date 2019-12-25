import React, { Component } from 'react';
import '../App.css';
import logo from '../logo1.png';
import TextField from '@material-ui/core/TextField';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

    const style = {
        backgroundColor: '#5E2E78',
        color:'white',
        font: 'inherit',
        width:'40%',
        height:'10%',
        padding: '10px',
        cursor: 'pointer',
        borderRadius:'10px'
      };
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login2">
          <div className="Login">
          <div className="HeaderLogin">
                <img src={logo} width="70%" height="70%" alt="Logo"/>
            </div> 
            <form onSubmit={this.handleSubmit}>
            {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
                </h3>
            }
            <TextField id="standard-basic" label="Username" width="400px"
            data-test="username" value={this.state.username} onChange={this.handleUserChange}/><br/><br/>

            <TextField id="standard-basic" label="Password" type="password"
            data-test="password" value={this.state.password} onChange={this.handlePassChange}/><br/><br/>

            <input style={style} type="submit" value="LOGIN" data-test="submit" />
            </form>
            </div>
      </div>
    );
  }
}

export default LoginPage;