import React, { Component } from 'react';

const DEFAULT_CONTEXT = {
  nif: '',
  onNifChange: (nif) => { },
}

export const Context = React.createContext(DEFAULT_CONTEXT);

export default class ContextProvider extends Component {

  constructor(props) {
    super(props)

    this.handleNifChange = (nif) => {
      this.setState({ nif })
    }

    this.state = {
      nif: '',
      onNifChange: this.handleNifChange
    }
  }

  

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const ContextConsumer = (WrappedComponent) => (props) => (
  <Context.Consumer>
    {context => <WrappedComponent context={context} {...props}/>}
  </Context.Consumer>
)