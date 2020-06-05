import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';
import Home from './components/dashboard/Home';
import InfoSaldo from './components/infoSaldo/InfoSaldo';
import InfoMutasi from './components/infoMutasi/InfoMutasi';
import Login from './components/auth/Login';
import PageNotFound from './components/page404';
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/infosaldo" component={InfoSaldo} />
        <Route path="/infomutasi" component={InfoMutasi} />
        <Route
          render={() => {
            return <PageNotFound />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
