import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import InserirouEditar from "./InserirouEditar";
import Inserir from "./Inserir";
import './util';
import { event } from 'jquery';
import { AiOutlineHome } from "react-icons/ai";
import PostData from "./data/db.json"


const headerProps = {
  "icon":<AiOutlineHome/>,
  "titulo":"Home",
  "sub-titulo":"Titulo menu",
  "sub-titulo2":"Lista de UNOPs"
};

class HeaderHome extends React.Component {


  toogleBanner(id) {


    var idPai = document.getElementById('lista');

      if (id == 1) {
        document.getElementById('galeriaBannerId').style.display = "block";

      } else {
        document.getElementById('galeriaBannerId').style.display = "none";
      }




  }

  render() {

    return (

      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu">
          
          <button className="navbar-toggler" id="btn-busca-mobile" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <nav className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto sub-menu" id="lista">
            <li className="nav-item active">
               {headerProps.icon} <span>/</span>
              </li>
              <li className="nav-item active">
              {headerProps.titulo} <span>/</span> 
              </li>
              <li className="nav-item">
              {headerProps['sub-titulo']} <span>/</span>
              </li>
              <li className="nav-item">
              {headerProps['sub-titulo2']} 
              </li>
            </ul>
            
          </nav>
        </nav>

        <div className="all">



          <div className="all-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/insert-edit" component={InserirouEditar} />
              <Route path="/inserir" component={Inserir} />
              <Route path="/lista" component={PostData} />
            </Switch>

          </div>


          

         

        </div>


      </div>


    )


  }


}






export default HeaderHome;
