import React from 'react';
import logo from './logo.svg';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { BiAddToQueue } from "react-icons/bi";
import axios from "axios";
import { Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import { timers } from 'jquery';

const urlParams = new URLSearchParams(window.location.search);
const baseURL = "http://localhost:3002/unops";
const baseURLTurno = "http://localhost:3002/lista-turnos";
const baseURLRestaurantes = "http://localhost:3002/lista-restaurantes";
const baseURLFeriados = "http://localhost:3002/lista-feriados";
var idMainObj = urlParams.get("value")
var baseUrlGenerica = null;
var objLocal = null;
var objtoRemove = null;
var listaUpdate = null;
var getTexto = null;


// reseta o formulário
const initialState = {
  unop:{"nome": "","cnpj": "","situação": "",
  "lista-turnos": {
    "id": "",
    "nome": "",
    "unopId": ""
  },
  "lista-restaurantes":{
    "id": "",
    "nome": "",
    "unopId": ""
  },
  "lista-feriados":{
    "id": "",
    "nome": "",
    "unopId": ""
  }},
  list:[],
  listCat:[],
  obj:{}
        
}



const getUnops = (unop = null)=>{

  if(unop == null){
   return axios.get(baseURL).then((unop) => {
     initialState.list= unop.data;
   })
  }else{  
   var listLocal = [];
   initialState.list =  listLocal;
   initialState.list.push(unop);
   return initialState.list 

  }

}

getUnops();


const getCatTurno = (unop = null)=>{

  if(unop == null){
   return axios.get(baseURLTurno).then((unop) => {
    initialState.listCatTurno= unop.data;
   });

  }

}

getCatTurno();

const getCatRestaurantes = (unop = null)=>{

  if(unop == null){
   return axios.get(baseURLRestaurantes).then((unop) => {
    initialState.listCatRestaurantes= unop.data;
   });

  }

}

getCatRestaurantes();


const getCatFeriados = (unop = null)=>{

  if(unop == null){
   return axios.get(baseURLFeriados).then((unop) => {
    initialState.listCatFeriados= unop.data;
   });

  }

}

getCatFeriados();



class InserirouEditar extends React.Component {



  constructor(){
    super();
    this.state = {initialState};
  }


  componentWillMount(){
    axios.get(baseURL).then((resp) => {
      this.setState({ list: resp.data });
      this.getObjectById()
    })


  }


  getObjectById(){
    
    var id = urlParams.get("value");
  
     var objLocal = initialState.list.filter(u=>u.id == id);
     this.setState({obj: objLocal});
     initialState.obj = objLocal
     this.renderEditionFrom(objLocal)
  }
  
  getByClick(url){

    if(baseUrlGenerica){
      baseUrlGenerica = null;
      baseUrlGenerica = url;
    }else{
      baseUrlGenerica = url;
    }

    if(url == "http://localhost:3002/lista-turnos"){
      document.getElementById('texto_form').innerHTML = "";
      document.getElementById('texto_form').innerHTML ="Incluir Turno";
      return
    }
    
    if(url == "http://localhost:3002/lista-restaurantes"){
    document.getElementById('texto_form').innerHTML = "";  
    document.getElementById('texto_form').innerHTML ="Incluir Restaurante";
    return
    }
    
    if(url == "http://localhost:3002/lista-feriados"){
    document.getElementById('texto_form').innerHTML = "";  
    document.getElementById('texto_form').innerHTML ="Incluir Feriados";
    return
    }
    

  }


  clear(){
    this.setState({unop:initialState.unop});
  }

  save(){

    var obj ={
      "id": "",
      "nome": "",
      "unopId": ""
    }
    var nome = document.getElementById('nome');
    obj.nome = nome.value;
    obj.unopId = idMainObj;

    if(nome.value == null || nome.value == ""){
      document.getElementById('ms_nome').innerHTML = "Preencha o campo nome!";
      return
    }

// mark

    const unop = obj;
    const method = obj.id?'put':'post';
    const url = obj.id?`${baseUrlGenerica}/${obj.id}`:baseUrlGenerica;
    axios[method](url, obj).then(resp => {
      document.location.reload();
    })
  }

  getUpdateList(unop, add = true){
  
    const list = listaUpdate.filter(u=>u.id != unop.id);
    if(add) list.unshift(unop);
    return list 
    ;
    
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
 
  

  renderEditionFrom(objParam = null){
   

      objLocal=initialState.list.filter(u=>u.id == urlParams.get("value"));

      if(initialState.list.length > 0){
    
    if(objLocal.length){
            return (

            
              <div key={objLocal[0].id}>
            
                  <h3> {objLocal[0].id} - {objLocal[0].nome}</h3>
                  <h3>CNPJ: <span className="cnpj">{objLocal[0].cnpj}</span></h3>
                      
              </div>
            );
        
          }
    
      }
      
    
}


remove(unop, lista, url){
  axios.delete(`${url}/${unop.id}`).then(resp => {
    document.location.reload();
  });
}

getObjectByClick(objLocal, lista, url){

  objtoRemove = objLocal;
  baseUrlGenerica = url;
  listaUpdate = null;
  listaUpdate = lista
  
}

hideMsn(){
  document.getElementById('ms_nome').innerHTML = ""; 
}

  renderTurnos(){

 

    if(initialState.list.length > 0){

      objLocal=initialState.list.filter(u=>u.id == urlParams.get("value"));


          
            return (
           
            <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Turnos Selecionados</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody> 
                        { this.renderRowsTurnos()}  
                        <tr>
                          <td></td>
                            <td><button type="button" className="btn btn-dark" 
                            data-toggle="modal" data-target="#modalSubscriptionForm" onClick={()=>this.getByClick(baseURLTurno)}>Incluir Turno</button></td>
                        </tr>  
                        </tbody>
                   </table>                         
    
     
              );
            // }
           
       

    
    }
    
}


renderRowsTurnos(){


if(initialState.list.length > 0){

  objLocal=initialState.list.filter(u=>u.id == urlParams.get("value"));

  if(initialState.listCatTurno){

    if(objLocal.length > 0){
      
    var list = initialState.listCatTurno.filter(o => o.unopId == objLocal[0].id);


    return list.map(obj => {
   
          return(
            <tr key={obj.id}>
              <th scope="row">{obj.nome}</th>
              <td>
                <Link className="talbe-links" data-toggle="modal" data-target="#exampleModal"
                 onClick={()=>this.getObjectByClick(obj, list, baseURLTurno)}><FaTrashAlt />
                 </Link>     
              </td>
            </tr>
        
      
      
          );
             
       })
  
    }

  }
  
 
  
    }
}


renderRestaurantes(){

 

  if(initialState.list.length > 0){

    objLocal=initialState.list.filter(u=>u.id == urlParams.get("value"));

          return (
         
          <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Restaurantes selecionados</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody> 
                      { this.renderRowsRestaurantes()}  
                      <tr>
                        <td></td>
                          <td><button type="button" className="btn btn-dark" 
                            data-toggle="modal" data-target="#modalSubscriptionForm"
                             onClick={()=>this.getByClick(baseURLRestaurantes)}>Incluir Restaurante</button></td>
                      </tr>  
                      </tbody>
                 </table>                         
  
   
            );
          // }
         
     

  
  }
  
}


renderRowsRestaurantes(){


if(initialState.list.length > 0){

objLocal=initialState.list.filter(u=>u.id == urlParams.get("value"));

if(initialState.listCatRestaurantes){
  var list = initialState.listCatRestaurantes.filter(o => o.unopId == urlParams.get("value"));

listaUpdate = initialState.listCatRestaurantes;
return list.map(obj => {
  objtoRemove = obj
  return(
   
     <tr key={obj.id}>
      <th scope="row">{obj.nome}</th>
      <td><Link className="talbe-links" data-toggle="modal" data-target="#exampleModal" onClick={()=>this.getObjectByClick(obj, list, baseURLRestaurantes)} ><FaTrashAlt /></Link>     
      </td>
    </tr>
   
     );
         
   })

}

  }
}

renderConfigCalendUnid(){


 

  if(initialState.list.length > 0){

    objLocal=initialState.list.filter(u=>u.id == urlParams.get("value"));


          return (
         
          <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Dias selecionados</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody> 
                      { this.renderRowsCalendUnid()}  
                      <tr>
                        <td></td>
                          <td><button type="button" className="btn btn-dark" 
                            data-toggle="modal" data-target="#modalSubscriptionForm" onClick={()=>this.getByClick(baseURLFeriados)}>Incluir Feriado</button></td>
                      </tr>  
                      </tbody>
                 </table>                         
  
   
            );
          // }
         
     

  
  }      
}


renderRowsCalendUnid(){


  if(initialState.list.length > 0 ){
  
  objLocal=initialState.list.filter(u=>u.id == urlParams.get("value"));
  if(initialState.listCatFeriados){
    var list = initialState.listCatFeriados.filter(o => o.unopId == idMainObj);
  
    listaUpdate = initialState.listCatFeriados;
    return list.map(obj => {
      objtoRemove = obj
          return(
          
            <tr key={obj.id}>
              <th scope="row">{obj.nome}</th>
              <td><Link className="talbe-links" data-toggle="modal" data-target="#exampleModal"onClick={()=>this.getObjectByClick(obj, list, baseURLFeriados)} ><FaTrashAlt /></Link>     
              </td>
            </tr>       
        
          );
             
       })
  
  }

  
    }
  }
  

  render(){


    return (

      <div className="App">

        <div class="modal fade" id="modalSubscriptionForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
            <form> 
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold" id="texto_form"></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-3">
                <div class="md-form mb-5">
                <label data-error="wrong" data-success="right" for="form3">Nome</label>
                  <input type="text" className="form-control form-control-lg" id="nome" placeholder="Nome" name="nome" 
                    required onKeyDown={()=>this.hideMsn()} />
                    <small id="ms_nome" className="vermelho"></small>
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-success col-md-12" onClick={()=> this.save()}>Incluir<i class="fas fa-paper-plane-o ml-1"></i></button>
              </div>
              <div class="modal-footer d-flex justify-content-center">
              <button type="button" class="btn col-md-12" data-dismiss="modal">Cancelar</button>
              </div>
            </form>
            </div>
          </div>
        </div>



        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Excluir</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Tem certeza que quer excluir?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>this.remove(objtoRemove, listaUpdate, baseUrlGenerica)}>Confirmar a Exclusão</button>
              </div>
            </div>
          </div>
        </div>
          
        <div id="wrapper">
  
          <section id="intro" className="main">
  
            <h2>Configuração da UNOP</h2><br/><br/>
           
  
            <section id="form-inser-edit">
    
             
           
                {this.renderEditionFrom()}
    

                <form> 
                <div id="tables-insert-edit-all">
                
                <section>
                <h3>Turnos</h3>            
                {this.renderTurnos()}

                </section>

                <section>
                      <h3>Restaurantes</h3>
                      {this.renderRestaurantes()}
                </section>
                  

                </div>

               <section>
                      <h3>Configurar Calendário da Unidade</h3>
                      
                       {this.renderConfigCalendUnid()}
                      </section>


            </form>


                
                
             </section>
  
   
          </section>
  
  
  
        </div>
  
      </div>
    )
  
  
  



  }

  

}



export default InserirouEditar;
