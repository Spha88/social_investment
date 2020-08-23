import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
import Loans from './components/pages/loans/Loans';
import LoanApplication from './components/pages/loanApplication/LoanApplication';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/loans" component={Loans} />
        <Route path="/apply" component={LoanApplication} />
      </Switch>
    </div>
  );
}

export default App;
