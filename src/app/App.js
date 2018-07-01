import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import ContextProvider from '../context/ContextProvider'
import SessionContextProvider from '../context/session-context'

import HomePage from '../pages/HomePage'
import TestPage from '../pages/TestPage'

export default class App extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <SessionContextProvider>
            <ContextProvider>
              <Switch>
                <Route exact path={'/'} component={HomePage} />
                <Route exact path={'/test'} component={TestPage} />
              </Switch>
            </ContextProvider>
          </SessionContextProvider>
        </BrowserRouter>
      </main>
    )
  }
}