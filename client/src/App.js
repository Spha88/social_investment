import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
import Loans from './components/pages/loans/Loans';
import LoanApplication from './components/pages/loanApplication/LoanApplication';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/loans" component={Loans} />
        <Route path="/apply" component={LoanApplication} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
