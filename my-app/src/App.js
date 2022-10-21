import React from 'react';
import { ListPokemon } from './pages';

import { Routes, Route } from "react-router-dom"
import { Pokeinfo } from './components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListPokemon />} />
        <Route path='/about/:pokeId' element={<Pokeinfo />} />

      </Routes>
    </div >
  );
}

export default App;
