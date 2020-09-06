import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import { checkLoggedIn } from './store/actions/authentication';

import Navigation from './components/navigation/navigation';
import Home from './components/pages/home/home';
import Loans from './components/pages/loans/Loans';
import LoanApplication from './components/pages/loanApplication/LoanApplication';
import Profile from './components/pages/Profile/Profile';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import LogoutPage from './components/pages/Logout/LogoutPage';
import LoanApplicationSlide from './components/pages/loanApplication/LoanApplicationSlide';

function App({ checkLoggedIn }) {

  useEffect(() => {
    checkLoggedIn();
    // eslint-disable-next-line 
  }, []);

  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/loans" component={Loans} />
        <Route path="/logout" component={LogoutPage} />
        <ProtectedRoute path="/apply" component={LoanApplicationSlide} />
        <ProtectedRoute path="/profile" component={Profile} />

      </Switch>
    </React.Fragment>
  );
}

export default connect(null, { checkLoggedIn })(App);
