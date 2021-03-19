import React, {useState} from 'react';

import Menu from './Menu';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      {logged && <Menu />}
    </div>
  );
}

export default App;
