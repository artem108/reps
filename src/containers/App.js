import React, { Component } from 'react';
import Main from '../components/Main'
import { connect } from 'react-redux';
import { getData } from '../modules/index'
import { getItems } from '../api'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
     dispatch(getData())
  }
  render() {
    const { data, isLoading, isError } = this.props

    return (
      <div className="App">
        <ul>
          { !isError ?
            !isLoading
            ? data.map(item => <Main key={item.height + item.mass} str={item.name} />)
            : 'Loading...'
            : 'Something went wrong ¯\\_(ツ)_/¯'
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      data: state.data.items,
      isLoading: state.data.isLoading,
      isError: state.data.isError
    }
 }

export default connect(mapStateToProps)(App);
