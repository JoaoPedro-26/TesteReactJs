import React from "react";
import Cadastrar from "./components/Cadastrar";
import RodaPe from "./components/Footer";
import { GlobalStyle } from './components/GlobalStyle';
import Header from "./components/Header";
import UpContainer from "./components/HeadUpContainer";
import InfosClientes from "./components/LowContainer";
import ContainerMidle from "./components/MidleContainer";
import Clientes from "./components/NovidadesClientes";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <UpContainer/>
      <ContainerMidle/>
      <Clientes/>
      <InfosClientes/>
      <Cadastrar/>
      <RodaPe/>
    </div>
  );
}

export default App;
