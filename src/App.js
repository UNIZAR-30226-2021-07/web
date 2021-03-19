import React, { useState } from 'react';

import Menu from './Menu';
import Login from './Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      {logged ? <Menu /> : <Login onLogin={() => setLogged(true)} />}
    </div>
  );
}

export default App;
