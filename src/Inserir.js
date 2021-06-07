import React from 'react';
import logo from './logo.svg';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { BiAddToQueue } from "react-icons/bi";
import axios from "axios";
import { Switch, Route, Link } from 'react-router-dom';

const urlParams = new URLSearchParams(window.location.search);
const baseURL = "http://localhost:3002/unops";
const baseURLTurno = "http://localhost:3002/lista-turnos";
const baseURLRestaurantes = "http://localhost:3002/lista-restaurantes";
const baseURLFeriados = "http://localhost:3002/lista-feriados";
var baseUrlGenerica = null;
var objLocal = null;
var objtoRemove = null;
var listaUpdate = null;

// reseta o formulário
const initialState = {
  unop:{"nome": "","cnpj": "","situação": "","lista-turnos": [],
  "lista-restaurantes":[],"lista-feriados":[]},
  list:[],
  listCat:[],
  obj:{}
        
}

class Inserir extends React.Component {



  constructor(){
    super();
    this.state = {initialState};
  }

  componentWillMount(){
    axios.get(baseURL).then(resp => {
      this.setState({ lista: resp.data });
    })
 }

  clear(){
    this.setState({unop:initialState.unop});
  }

  save(){
    const unop = this.state.unop;
    const method = unop.id?'put':'post';
    const url = unop.id?`${baseURL}/${unop.id}`:baseURL;
    axios[method](url, unop).then(resp => {
      const list = this.getUpdateList(resp.data);
      this.setState({unop:initialState.unop, list});
    })
  }

  getUpdateList(unop, add = true){
    const list = this.state.lista.filter(u=>u.id != unop.id);
    if(add) list.unshift(unop);
    return list 
  }


  updateField(event){
    const unop = this.state.unop;
    unop[event.target.nome] = event.target.value;
    this.setState({unop});
  }


  mascara_cnpj(cnpj){
  // MARK
    var cnpj = document.getElementById('cnpj');
    console.log(this.state.initialState.unop.cnpj.value);
    // if(this.state.initialState.unop.cnpj.length == 2 || cnpj.value.length == 6){
    //   cnpj.value = cnpj.value + ".";
    // }else if(cnpj.value.length == 10){
    //   cnpj.value = cnpj.value + "/";
    // }else if(cnpj.value.length == 15){
    //   cnpj.value = cnpj.value + "-";
    // };


    if(cnpj.value.length == 2 || cnpj.value.length == 6){
      cnpj.value = cnpj.value + ".";
    }else if(cnpj.value.length == 10){
      cnpj.value = cnpj.value + "/";
    }else if(cnpj.value.length == 15){
      cnpj.value = cnpj.value + "-";
    };

    
  }



  render(){


    return (
      <div className="App">





        
  
        <div id="wrapper">
  
          <section id="intro" className="main">
  
                    <h2>Configuração da UNOP</h2><br/><br/>
           
  
                    <form>                      
                      <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Nome</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control form-control-lg" id="" placeholder="Nome" name="nome" 
                          value={this.state.initialState.nome} onChange={e => {this.updateField(e)}} disabled="true" required/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">CNPJ</label>
                        <div className="col-sm-10">
                          <input type="number" className="form-control form-control-lg" placeholder="Digite o CNPJ" value="" id="cnpj" name="cnpj"
                          required/>
                        </div>
                      </div>
                      <fieldset className="form-group">
                        <div className="row">
                          <legend className="col-form-label col-sm-2 pt-0">Situação</legend>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                              <label className="form-check-label" for="gridRadios1">
                                Ativa
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                              <label className="form-check-label" for="gridRadios2">
                                Inativa
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Lista de Turnos</label>
                        <div className="col-sm-10">
                          <select className="form-control form-control-lg" name="lista-turnos" 
                          value={this.state.unop} onChange={e => {this.updateField(e)}}>
                            <option>Lista de Turnos</option>
                        </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Lista de Restaurantes</label>
                        <div className="col-sm-10">
                          <select className="form-control form-control-lg" name="lista-restaurantes" 
                          value={this.state.unop} onChange={e => {this.updateField(e)}}>
                            <option>Lista de Restaurantes</option>
                        </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Lista de Feriados</label>
                        <div className="col-sm-10">
                          <select className="form-control form-control-lg" name="lista-feriados" 
                          value={this.state.unop} onChange={e => {this.updateField(e)}}>
                            <option>Lista de Feriados</option>
                        </select>
                        </div>
                      </div>


                      <div className="form-group row">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                      </div>
                    </form>
            
           </section>

   
 
  
       </div>
  
      </div>
    )
  
  
  



  }

  

}



export default Inserir;
