import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import Match from './Match';
import Login from './Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>

        <Route path="/match">
          <Match />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
