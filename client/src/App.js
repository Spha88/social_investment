import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
import Loans from './components/pages/loans/loans';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/loans" component={Loans} />
      </Switch>
    </div>
  );
}

export default App;
