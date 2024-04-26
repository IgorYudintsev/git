import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Igor} from "./Igor";
import {Sasha} from "./Sasha";
import {NewSasha} from "./NewSasha";

function App() {
  return (
    <div className="App">
      <div>26.04.2024-7:24-MASTER</div>
      <div>26.04.2024-7:26-MASTER</div>
        <Igor/>
        <Sasha/>
        <NewSasha/>
    </div>
  );
}

export default App;
