import React, { Component } from 'react';
import { Context } from '../context/ContextProvider';
import {Link} from 'react-router-dom';

export default class TestPage extends Component {

  render() {
    return(
      <Context.Consumer>
        {context => (
          <div>
            <div>{context.nif}</div>
            <Link to="/">home</Link>
          </div>
        )}
      </Context.Consumer>
    )
  }
}