import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/HomePage/Home'
import Active from './components/Active/Active';
import Archived from './components/Archived/Archived'
import AllTodos from './components/AllTodos/AllTodos'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <SideBar>
                <Switch>
                    <Route exact path="/" component={withRouter(Home)}  />
                    <Route exact path="/active" component={withRouter(Active)}  />
                    <Route exact path="/archived" component={withRouter(Archived)}  />
                    <Route exact path="/all" component={withRouter(AllTodos)}  />
                </Switch>
            </SideBar>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
