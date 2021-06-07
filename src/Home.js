import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { FaEdit, FaTrashAlt, FaSearch } from 'react-icons/fa';
import { BiAddToQueue } from "react-icons/bi";
import axios from "axios";
import { Switch, Route, Link } from 'react-router-dom';
import InserirouEditar from "./InserirouEditar";
import PostData from "./data/db.json"



const baseURL = "http://localhost:3002/unops";


// reseta o formulário
const initialState = {
  unop:{"nome": "","cnpj": "","situação": "","lista-turnos": [],
  "lista-restaurantes":[],"lista-feriados":[]},
  list:[]
        
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

getUnops()




class Home extends React.Component {

  //  state ={initialState};
  

  constructor(){
    super();
    this.state = { initialState }
  }

  
  componentWillMount(){
    axios.get(baseURL).then((resp) => {
      this.setState({ list: resp.data });
    })

  }


getElSearch(){



  var busca = document.getElementById('inputAddress').value.toLowerCase();
  
  var tbody = document.getElementById('tbody');
  

  for( var i=0; i < tbody.childNodes.length; i++ ){

    var achou = false;
    var tr = tbody.childNodes[i];
    var td = tr.childNodes;


    for(var j=0; j < td.length; j++){

      if(td[j].childNodes[0].nodeValue != null){
            var value = td[j].childNodes[0].nodeValue.toLowerCase();
          
            
            if(value.indexOf(busca) >= 0 || value == busca && busca != ""){
              achou = true;              
            }
            
            

          }
      if(achou){
        console.log(tr);
        
        tr.style.display="table-row";
      }else{
        tr.style.display="none";
      }

    }//fecha o for filho


    

    
   }//fechao o for pai


     

  }//fecha o método



  
getElSearchSelect(){

  var selectBusca = document.getElementById('selectBusca').value.toLowerCase();
  

  var tbody = document.getElementById('tbody');
  

  for( var i=0; i < tbody.childNodes.length; i++ ){

    var achou = false;
    var tr = tbody.childNodes[i];
    var td = tr.childNodes;


    for(var j=0; j < td.length; j++){

      if(td[j].childNodes[0].nodeValue != null){
            var value = td[j].childNodes[0].nodeValue.toLowerCase();
            
            if(selectBusca == value || selectBusca == "Situação"){
              achou = true; 
            }
            

          }
      if(achou){
        console.log(tr);
        
        tr.style.display="table-row";
      }else{
        tr.style.display="none";
      }

    }//fecha o for filho


    

    
   }//fechao o for pai


     

  }//fecha o método


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
    const list = initialState.list.filter(u=>u.id != unop.id);
    if(add) list.unshift(unop);
    return list 
  }


  updateField(event){
    const unop = this.state.unop;
    unop[event.target.nome] = event.target.value;
    this.setState({unop});
  }


  load(unop){
     this.setState({ unop });
     window.location.href = "/insert-edit?value="+ unop.id
  }

  remove(unop){
    axios.delete(`${baseURL}/${unop.id}`).then(resp => {
      const list = this.getUpdateList(unop, false);
      this.setState({ list });
    });
  }

  // tabela
  renderTable(){

    return (

      <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Lista de UNOPS</th>
          <th scope="col">Código da UNOP</th>
          <th scope="col">Situação</th>
          <th scope="col">Edição</th>
        </tr>
      </thead>
      <tbody id="tbody">
       {this.renderRows()}
      </tbody>
    </table>

    );

    }

// campos da tabela    

    renderRows(param = false){
   
      var listLocal = [];
      
      if(param = false){


        initialState.list = [];

        return initialState.list.map(unop => {
          return (
            <tr key={unop.id} id={unop.id} className="trTable">
              <th scope="col">{unop.nome}</th>
              <td>{unop.id}</td>
              <td>{unop.situação}</td>
              <td>              
                <span id="visualizar"><Link onClick={()=> this.load(unop) }  className="talbe-links-home"><FaEdit /></Link></span>     
              </td>
            </tr>
          );
        });

      }else{

        // listLocal = param;
        // initialState.list= listLocal;

        return initialState.list.map(unop => {
          return (
            <tr key={unop.id} className="trTable">
              <th scope="col">{unop.nome}</th>
              <td>{unop.id}</td>
              <td>{unop.situação}</td>
              <td>              
                <span id="visualizar"><Link onClick={()=> this.load(unop) }  className="talbe-links-home"><FaEdit /></Link></span>     
              </td>
            </tr>
          );
        });
      }
  
    }

  render(){


    return (
      <div className="App">
  


        

        <div id="wrapper">
  
          <section id="intro" className="main">
  
            <h2>Lista de UNOPS</h2>
            <section id="filtros">
                <form class="nav-form">
                
                <div className="input-group input-group-search-top">
                  <input type="search" className="form-control form-control-lg" id="inputAddress" placeholder="Pesquisar UNOP"
                   onKeyUp={()=>this.getElSearch()} />
                  <div className="input-group-btn ">
                  <button type="submit" class="btn btn-default">
                    <FaSearch/>
                  </button>
                  </div>
                </div>
                
                <div className="form-group form-control-select">
                      <select className="form-control form-control-lg" id="selectBusca" onChange={()=>this.getElSearchSelect()}>
                        <option>Situação</option>
                        <option value="Ativa">Ativa</option>
                        <option value="Inativa">Inativa</option>
                      </select>
                </div>
              </form>
            </section>
  
            <section id="lista-unops">
    
             


             {/* Tabela */}
             
             {this.renderTable()}
             

             {/* Páginação */}
             <nav aria-label="Navegação de página exemplo">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link page-link-dark-back" href="#" aria-label="Anterior">
                      <span aria-hidden="true">&lsaquo;</span>
                      <span className="sr-only">Anterior</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link page-link-dark-back" href="#" aria-label="Próximo">
                      <span aria-hidden="true">&rsaquo;</span>
                      <span className="sr-only">Próximo</span>
                    </a>
                  </li>
                </ul>
              </nav>
          </section>
            
            
            
          </section>
  
   
  
        </div>
  
  
  
  
  
      </div>
    )
  
  
  



  }

  

}



export default Home;
