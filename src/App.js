import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
//import { BrowerRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from './components/Header';
import Secondaryheader from './components/secondary-header/Secondaryheader';
import Footer from './components/Footer';
import View from './components/View';

function App() {
  return (
    <div>
      <Header />
      <Secondaryheader />
      <View />
      <Footer />
    </div>
  )
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/movie" component={App} />
    <Route path="/series" component={App} />
  </Router>
), document.getElementById('root'))

export default App;
