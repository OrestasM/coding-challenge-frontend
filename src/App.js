import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <SideBar/>
      </div>
      </Provider>
    );
  }
}

export default App;
