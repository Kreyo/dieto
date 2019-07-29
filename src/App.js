import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container style={{ marginTop: '80px' }}>
          <BrowserRouter>
            <Switch>
              <Route path="/client/:clientId" component={Details} />
              <Route path="/" component={Homepage} />
            </Switch>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;
