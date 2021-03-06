import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';

const NewRoute = () => {
  return(
    <div>
      <p>New Route</p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
