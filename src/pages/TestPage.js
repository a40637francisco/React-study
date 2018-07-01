import React, { Component } from 'react';
import { Context } from '../context/ContextProvider';
import { Link } from 'react-router-dom';
import { SessionContextConsumer } from '../context/session-context';

class TestPage extends Component {

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <div>{context.nif}</div>
            <span>{this.props.session.user ? this.props.session.user.email : ''}</span>
            <Link to="/">home</Link>
          </div>
        )}
      </Context.Consumer>
    )
  }
}

export default SessionContextConsumer(TestPage)