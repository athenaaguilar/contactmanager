// main app component
import React from 'react';
// react router dom
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import Test from './components/test/Test';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// functional component
function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header brand='Contact Manager' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/add' component={AddContact} />
              <Route exact path='/edit/:id' component={EditContact} />
              <Route exact path='/about' component={About} />
              <Route exact path='/test' component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
