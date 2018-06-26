import React, { Component } from 'react';
import Main from '../components/Main'
import { connect } from 'react-redux';
import { defaultData, getData } from '../modules/index'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(defaultData())
  }
  simpleAction = (event) => {
   this.props.dispatch(getData())
  }
  render() {
    return (
      <div className="App">
        <Main str={this.props.data} />
        <button onClick={this.simpleAction}>vfecdws</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data.items
  }
}

export default connect(mapStateToProps)(App);
