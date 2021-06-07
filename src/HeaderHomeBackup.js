import React from 'react';
import logo from './logo.svg';
import './App.css';
import './util';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SobreNos from './SobreNos';
import Fotos from './Fotos';
import Contato from './Contato';



class HeaderHome extends React {

  constructor(){

  }
  
  return (

    <div className="App">

    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu">
      <Link className="navbar-brand" to="/" >
        <img src="logo.png" id="logo" />
      </Link>
      <button className="navbar-toggler" id="btn-busca-mobile" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto sub-menu">
          <li className="nav-item active">
            <Link className="nav-link" to="/" exact  id="1"><i className="tiny material-icons">home</i> Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-nos" id="2" onClick="toogleBanner(this)"><i className="tiny material-icons">people</i> Sobre Nós</Link>
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

    <div className="all">




      <div id="galeriaBanner-out">
        <div id="galeriaBannerId" className="galeriaBanner">

          <img src="template/images/banner.jpg" alt="foto" />
          <img src="template/images/banner2.jpg" alt="foto" />
          <img src="template/images/banner3.jpg" alt="foto" />
          <img src="template/images/banner4.jpg" alt="foto" />



          <div className="inner">

            <img src="logo-banner.png" id="logo-banner" />
            <p>Qualidade e durabilidade são conceitos <a href="#">FKMóveis</a></p>

          </div>
        </div>

      </div>



      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre-nos" component={SobreNos} />
        <Route path="/fotos" component={Fotos} />
        <Route path="/Contato" component={Contato} />
      </Switch>

    </div>

    <footer id="footer-all">
      <div class="container" id="footer-container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <h3>Site Map</h3>
            <ul class="list-unstyled three-column">
              <li>Home</li>
              <li>Sebre Nós</li>
              <li>Fotos</li>
              <li>Loja Virtual</li>
              <li>Contato</li>
            </ul>
            <ul class="list-unstyled socila-list">
              <li><img src="images/miniaturas/1.jpg" alt="" /></li>
              <li><img src="images/miniaturas/2.jpg" alt="" /></li>
              <li><img src="images/miniaturas/3.jpg" alt="" /></li>
              <li><img src="images/miniaturas/4.jpg" alt="" /></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h3>Lançamentos</h3>
            <div class="media">
              <a href="#" class="pull-left">
                <img src="images/miniaturas/lancamentos-1.jpg" alt="" class="media-object" />
              </a>
              <div class="media-body">
                <h4 class="media-heading">Sala de Estar</h4>
              </div>
            </div>
            <div class="media">
              <a href="#" class="pull-left">
                <img src="images/miniaturas/lancamentos-2.jpg" alt="" class="media-object" />
              </a>
              <div class="media-body">
                <h4 class="media-heading">Quarto</h4>
              </div>
            </div>
            <div class="media">
              <a href="#" class="pull-left">
                <img src="images/miniaturas/lancamentos-3.jpg" alt="" class="media-object" />
              </a>
              <div class="media-body">
                <h4 class="media-heading">Cozinha</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <h3>Infantil</h3>
            <img class="img-thumbnail" src="images/miniaturas/inf-1.jpg" alt="" />
            <img class="img-thumbnail" src="images/miniaturas/inf-2.jpg" alt="" />
            <img class="img-thumbnail" src="images/miniaturas/inf-3.jpg" alt="" />
            <img class="img-thumbnail" src="images/miniaturas/inf-4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="copyright text-center">
        Copyright © 2017 <span><a href="https://oseiasfreitas.herokuapp.com/">Oséias Freitas</a></span>
      </div>
    </footer>





  </div>


  );


}






export default HeaderHome;
