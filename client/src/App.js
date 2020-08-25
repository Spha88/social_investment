import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Navigation from './components/navigation/navigation';
import Loans from './components/pages/loans/Loans';
import LoanApplication from './components/pages/loanApplication/LoanApplication';
import Profile from './components/pages/Profile/Profile';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/loans" component={Loans} />
        <ProtectedRoute path="/apply" component={LoanApplication} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
