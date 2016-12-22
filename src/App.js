import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: 1
    }
  }

  onClick(){
    this.state.counter ++;
    this.forceUpdate();
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="all">
        <div className="header">
            <div className="contain">
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Media</li>
                    <li>Publications</li>
                    <li>Contact</li>
                    <li>Sign Up</li>
                    <li>Live Demo</li>
                </ul>
            </div>
        </div>

        <div className="jumbotron">
            <div className="container">
                <div className="main">
                    <h1>WebGT</h1>
                    <h2>Web Based Ground Truthing System</h2>
                    <a className="btn-main" href="#">Login</a>
                </div>
                <div className="sign_up">
                    <div className="sign_up_text">
                        <h3>Sign Up</h3>
                        <h4>It's free and anyone can join us</h4>
                        <table>
                            <tr><td> <b>Email:</b></td>
                                <td><input name="rgEmail" type="text" id="rgEmail" tabindex="4" /></td></tr>

                            <tr><td> <b>First Name:</b></td>
                                <td><input name="rgFname" type="text" id="rgFname" tabindex="5" /></td></tr>

                            <tr><td> <b>Last Name:</b></td>
                                <td><input name="rgLname" type="text" id="rgLname" tabindex="6" /></td></tr>

                            <tr><td> <b> Password:</b></td>
                                <td> <input name="rgPassword" type="password" id="rgPassword" tabindex="7" /> </td></tr>

                            <tr><td> <b> Confirm password:</b></td>
                                <td> <input name="rgPasswordConfirm" type="password" id="rgPasswordConfirm" tabindex="7" /> </td></tr>

                            <tr><td><b> Affiliation: </b></td>
                                <td><input name="rgAff" type="text" id="rgAff" tabindex="8" /></td></tr>

                            <tr><td colspan="2">
                                <div id="sign_up_text_register">
                                    <a className="btn-register" href="javascript:__doPostBack(&#39;rgstrButton&#39;,&#39;&#39;)">Register</a>
                                </div>
                            </td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
            <div className="contain">
                <p>&copy; Ben Gurion University of the Negev</p>
            </div>
        </div>
=======
      <div className="App" onClick={this.onClick.bind(this)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter = {this.state.counter}</h2>
        </div>
        <p className="App-intro">
          my Website <code>src/App.js</code> and save to reload.
        </p>
>>>>>>> 87b0960e99dadcac678061597e36a0129accb000
      </div>
    );
  }
}

export default App;
