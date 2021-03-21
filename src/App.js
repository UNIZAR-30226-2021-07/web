import React, { useState } from 'react';

import Menu from './Menu';
import Login from './Login';

import openPopupbox from './PopUp';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      {logged ? <Menu /> : <Login onLogin={() => setLogged(true)} />}
      <button onClick={() => openPopupbox("¡Atención!")}> PopUp</button>
    </div>
  );
}

export default App;
