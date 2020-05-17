import React from 'react';
import './App.css';
import { history } from './config/history'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/theme'
import store from './redux/store'
import { Provider } from 'react-redux'
import { PrivateRoute } from './reusableComponents/PrivateRoute'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import LoginPage from './authentication/LoginPage';
import RegisterPage from './authentication/RegisterPage';
import Home from './home/Home';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <div className="App">
            <Switch>
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <PrivateRoute exact path='/' component={Home} />
              <Redirect from='*' to='/' />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
