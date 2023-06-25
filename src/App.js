
import './App.css';
//import { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import PokemonCardList from './PokemonCardList';
import PokemonDetails from './PokemonDetails';
function App() {
 
  return (
    <div className="App">
        <Router>
                <Routes>
                    <Route path="/" element={<PokemonCardList/>} />
                    <Route path="/details/:name" element={<PokemonDetails/>} />
   </Routes>
   </Router>
    </div>
  );
}

export default App;
