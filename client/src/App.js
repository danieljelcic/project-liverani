import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { AdminPage, NotFoundPage, RegistrationPage, ChoicePage, OutcomePage, WaitingPage, FinalPage } from './pages/PagesTemplate'

function App() {
  return (

    <Router>
      <div id="app">
        <Switch>
          <Route path="/template/admin" component={AdminPage} exact />
          <Route path="/template/404" component={NotFoundPage} exact />
          <Route path="/template/registration" component={RegistrationPage} exact />
          <Route path="/template/choice" component={ChoicePage} exact />
          <Route path="/template/outcome" component={OutcomePage} exact />
          <Route path="/template/waiting" component={WaitingPage} exact />
          <Route path="/template/final" component={FinalPage} exact />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
