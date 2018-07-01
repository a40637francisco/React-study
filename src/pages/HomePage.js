import React, { Component } from 'react';
import { ContextConsumer } from '../context/ContextProvider';
import { Link } from 'react-router-dom';
import { SessionContextConsumer } from '../context/session-context';

class HomePage extends Component {

  onLogin = () => {
    this.props.session.onLogin({accesstoken: 'lol', email: 'email@fasdfsd', id: 1})
  }

  render() {
    return (
      <div>
        <input value={this.props.context.nif} onChange={(e) => this.props.context.onNifChange(e.target.value)} />
        <div>{this.props.context.nif}</div>
        <button onClick={this.onLogin}>login</button>
        <Link to="/test">Test</Link>
      </div>
    )
  }
}


export default SessionContextConsumer(ContextConsumer(HomePage))