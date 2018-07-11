import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//A provider is a react component that links react and redux
import {Provider} from 'react-redux';

import Posts from './Components/Posts'
import PostForm from './Components/PostForm'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
