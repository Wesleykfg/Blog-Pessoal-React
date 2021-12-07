import React from 'react';
import Navbar from "./components/estaticos/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario"
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: "100vh" }}>

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/cadastrousuario">
              <CadastroUsuario />
            </Route>
            <Route path="/temas">
              <ListaTema />
            </Route>
            <Route path="/posts">
              <ListaPostagem />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
//Os componentes estaticos devem ser postos dentro do Router, já o restante devem ser colocados dentro de switch, div e route path

export default App;
