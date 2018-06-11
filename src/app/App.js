import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import ContextProvider from '../context/ContextProvider'

import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';

export default class App extends Component {
  render() {
    return (
      <main>
        <ContextProvider>
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/test'} component={TestPage} />
          </Switch>
        </ContextProvider>
      </main>
    );
  }
}