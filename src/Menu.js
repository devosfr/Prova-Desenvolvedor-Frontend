import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SobreNos from './SobreNos';
import Fotos from './Fotos';
import Contato from './Contato';

function Menu() {

 return (
    <div className="App"> 
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu">
              <a className="navbar-brand" href="#">
                <img src="logo.png" id="logo"/>
              </a>
              <button className="navbar-toggler" id="btn-busca-mobile" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto sub-menu">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" ><i className="tiny material-icons">home</i> Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sobre-nos" ><i className="tiny material-icons">people</i> Sobre Nós</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/fotos" ><i className="tiny material-icons">collections</i> Fotos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/fotos" ><i className="tiny material-icons">collections</i> Loja Virtual</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contato" ><i className="tiny material-icons">phone</i> Contato</Link>
                  </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="O que você procura?" aria-label="Search" />
              <button className="btn my-2 my-sm-0 btn-busca" type="submit">Buscar</button>
            </form>
          </nav>
        </nav>

      

    </div>
    )



 
}



export default Menu;
