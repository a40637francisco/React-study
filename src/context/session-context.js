import React, { Component } from 'react'

import session from '../service/authentication/user-session'

const DEFAULT_SESSION_CONTEXT = {
  user: null,
  logout: () => { },
  onLogin: () => { }
}

export const SessionContext = React.createContext(DEFAULT_SESSION_CONTEXT)

export default class SessionContextProvider extends Component {

  constructor(props) {
    super(props)
    this.logout = (onLogout) => {
      this.setState({ user: null }, () => {
        session.remove()  
        if(onLogout) {
          onLogout()
        }
      })
    }

    this.onLogin = (user) => {
      this.setState({ user }, () => {
        session.save({
          token: user.accessToken,
          email: user.email,
          id: user.id,
        })
      })
    }

    this.state = {
      user: session.get() || DEFAULT_SESSION_CONTEXT.user,
      logout: this.logout,
      onLogin: this.onLogin
    }
  }

  render() {
    return (
      <SessionContext.Provider value={this.state}>
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}

export const SessionContextConsumer = (WrappedComponent) => (props) => (
  <SessionContext.Consumer>
    {context => <WrappedComponent session={context} {...props}/>}
  </SessionContext.Consumer>
)