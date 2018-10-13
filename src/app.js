import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import About from 'pages/about';
import AboutHistory from 'pages/about/history';
import AboutOffice from 'pages/about/office';
import Contact from 'pages/contact';
import Services from 'pages/services';
import Menu from 'menu';

const App = (props) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Fragment>
          <Menu />
          <Switch>
            <Route exact path={ '/services' } component={ Services } />
            <Route exact path={ '/about/history' } component={ AboutHistory } />
            <Route exact path={ '/about/offices' } component={ AboutOffice } />
            <Route exact path={ '/about' } component={ About } />
            <Route exact path={ '/contact' } component={ Contact } />
            <Redirect from={ '/' } to={ '/services' } />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
