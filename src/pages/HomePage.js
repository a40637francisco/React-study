import React, { Component } from 'react';
import { Context } from '../context/ContextProvider';
import {Link} from 'react-router-dom';

export default class HomePage extends Component {

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <input value={context.nif} onChange={(e) => context.onNifChange(e.target.value)}/>
            <div>{context.nif}</div>
            <Link to="/test">Test</Link>
          </div>
        )}
      </Context.Consumer>
    )
  }
}