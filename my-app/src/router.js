import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import Products from './routes/Products';
import Login from "./routes/login/Login";
import Register from "./routes/login/Register";
import ForgetPas from "./routes/login/ForgetPas";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/* <Route path="/products" exact component={Products} /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/forget" exact component={ForgetPas} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
