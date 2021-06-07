import React from 'react';
import logo from './logo.svg';
import './App.css';


function Contato() {

 return (
  <div className="App"> 



<div class="container contact-form" id="contato-content">

            
            
            <form method="post">
                <h1>Contato</h1>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Seu Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Seu Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Seu Número de Telefone *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Enviar Mensagem" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Sua Mensagem *" ></textarea>
                        </div>
                    </div>
                </div>
            </form>



<iframe id="pg-conteudo-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.958466575366!2d-51.32213718502381!3d-30.124001941941785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519803c97687555%3A0x27e4dec2154e0fc!2sR.%20Avelino%20Pi%20-%20Ermo%2C%20Gua%C3%ADba%20-%20RS%2C%2092500-000!5e0!3m2!1spt-BR!2sbr!4v1575587311175!5m2!1spt-BR!2sbr"
 height="450" frameborder="0" allowfullscreen=""></iframe>


</div>


  </div>
  )



 
}



export default Contato;
