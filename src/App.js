import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostItem from './components/PostItem';
import store from './createStore';
import history from './history';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact render={() => <Home />} />
              <Route path="/:post" render={(props) => <PostItem {...props}/>} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
