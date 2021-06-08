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

    var obj ={
      "nome": "",
      "cnpj": "",
      "situação": ""
    }
    var nome = document.getElementById('nome');
    var cnpj = document.getElementById('cnpj');
    var gridRadios1 = document.getElementById('gridRadios1');
    var gridRadios2 = document.getElementById('gridRadios2');
    var status = null;
    if(gridRadios1.checked == true){
       status = gridRadios1.value;
    }else if(gridRadios2.checked == true){
      status = gridRadios2.value;
   }

// mark
   if(nome.value == null || nome.value == ""){
     document.getElementById('ms_nome').innerHTML = "Preencha o campo nome!";
     return
   }

   if(cnpj.value == null || cnpj.value == ""){
    document.getElementById('msn_cnpj').innerHTML = "Preencha o campo cnpj!";
    return
  }
  
    obj.nome = nome.value;
    obj.cnpj = cnpj.value;
    obj.situação = status;
  
  
  
      const unop = obj;
      const method = obj.id?'put':'post';
      const url = obj.id?`${baseURL}/${obj.id}`:baseURL;
      axios[method](url, obj).then(resp => {
        document.location.href="http://localhost:3000/"
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

  mascara_cnpj(cnpj=null){
  
    var cnpj = document.getElementById('cnpj');

    cnpj.value = cnpj.value.replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2"); 
    
  }
 
  hideMsn(){
    document.getElementById('ms_nome').innerHTML = ""; 
    document.getElementById('msn_cnpj').innerHTML = "";
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
                        <input type="text" className="form-control form-control-lg" id="nome" placeholder="Nome" name="nome" 
                    required  onKeyDown={()=>this.hideMsn()}/>
                    <small className="vermelho" id="ms_nome"></small>
             
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">CNPJ</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control form-control-lg"  placeholder="Digite o CNPJ"
                      id="cnpj" name="cnpj" required onKeyUp={()=>this.mascara_cnpj()} maxLength="18" onKeyDown={()=>this.hideMsn()}/> 
                      
                    <small className="vermelho" id="msn_cnpj"></small>
                        </div>
                      </div>
                      <fieldset className="form-group">
                        <div className="row">
                          <legend className="col-form-label col-sm-2 pt-0">Situação</legend>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Ativa" checked/>
                              <label className="form-check-label" for="gridRadios1">
                                Ativa
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Inativa"/>
                              <label className="form-check-label" for="gridRadios2">
                                Inativa
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="form-group row">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary" onClick={()=> this.save()}>Incluir</button>
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
