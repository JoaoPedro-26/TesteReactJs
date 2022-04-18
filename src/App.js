import React from "react";
import ListaEpisodios from "./components/CarregandoDados";
import { GlobalStyle } from './components/GlobalStyle';
import Teste from "./components/FundoDeTela";
import Star from "./components/CarregandoDados";

function App() {
  return (
    <div className="App">
      <div style={{position: "absolute"}}>
        <Star/>
      </div>
      <Teste/>
    </div>
  );
}

export default App;
