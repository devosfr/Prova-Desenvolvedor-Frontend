(this.webpackJsonpTGP=this.webpackJsonpTGP||[]).push([[0],{16:function(e,t,n){},20:function(e){e.exports=JSON.parse('{"unops":[{"id":10001,"nome":"Minuano","cnpj":"36424694000131","situa\xe7\xe3o":"Ativa","lista-turnos":[{"id":1,"nome":"Manh\xe3"},{"id":2,"nome":"Tarde"},{"id":2,"nome":"Noite"}],"lista-restaurantes":[{"id":1,"nome":"Restaurante 1"},{"id":2,"nome":"Restaurante 2"},{"id":2,"nome":"Restaurante 3"}],"lista-feriados":[{"id":1,"nome":"13 de Agosto de 2019"},{"id":2,"nome":"15 de Novembro de 2019"},{"id":2,"nome":"24 de Dezembro de 2019"}]},{"id":10002,"nome":"Exatron","cnpj":"22150096000107","situa\xe7\xe3o":"Ativa","lista-turnos":[{"id":1,"nome":"Manh\xe3"},{"id":2,"nome":"Tarde"},{"id":2,"nome":"Noite"}],"lista-restaurantes":[{"id":1,"nome":"Restaurante 1"},{"id":2,"nome":"Restaurante 2"},{"id":2,"nome":"Restaurante 3"}],"lista-feriados":[{"id":1,"nome":"13 de Agosto de 2019"},{"id":2,"nome":"15 de Novembro de 2019"},{"id":2,"nome":"24 de Dezembro de 2019"}]},{"id":10003,"nome":"Planalto","cnpj":"54284490000124","situa\xe7\xe3o":"Ativa","lista-turnos":[{"id":1,"nome":"Manh\xe3"},{"id":2,"nome":"Tarde"},{"id":2,"nome":"Noite"}],"lista-restaurantes":[{"id":1,"nome":"Restaurante 1"},{"id":2,"nome":"Restaurante 2"},{"id":2,"nome":"Restaurante 3"}],"lista-feriados":[{"id":1,"nome":"13 de Agosto de 2019"},{"id":2,"nome":"15 de Novembro de 2019"},{"id":2,"nome":"24 de Dezembro de 2019"}]},{"id":10004,"nome":"Frigorifico Silva Ltda","cnpj":"47337485000177","situa\xe7\xe3o":"Ativa","lista-turnos":[{"id":1,"nome":"Manh\xe3"},{"id":2,"nome":"Tarde"},{"id":2,"nome":"Noite"}],"lista-restaurantes":[{"id":1,"nome":"Restaurante 1"},{"id":2,"nome":"Restaurante 2"},{"id":2,"nome":"Restaurante 3"}],"lista-feriados":[{"id":1,"nome":"13 de Agosto de 2019"},{"id":2,"nome":"15 de Novembro de 2019"},{"id":2,"nome":"24 de Dezembro de 2019"}]}]}')},43:function(e,t,n){},68:function(e,t){},69:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),l=n(36),i=n.n(l),c=(n(43),n.p,n(16),n(4)),o=n(12),r=n(13),d=n(15),u=n(14),j=n(10),m=n(6),b=n.n(m),h=(n(34),n(1)),p=new URLSearchParams(window.location.search),x="http://localhost:3002/unops",O="http://localhost:3002/lista-turnos",v="http://localhost:3002/lista-restaurantes",f="http://localhost:3002/lista-feriados",g=p.get("value"),y=null,N=null,k=null,C=null,I={unop:{nome:"",cnpj:"","situa\xe7\xe3o":"","lista-turnos":{id:"",nome:"",unopId:""},"lista-restaurantes":{id:"",nome:"",unopId:""},"lista-feriados":{id:"",nome:"",unopId:""}},list:[],listCat:[],obj:{}};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==e)return b.a.get(x).then((function(e){I.list=e.data}));var t=[];I.list=t,I.list.push(e),I.list}();!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==e)b.a.get(O).then((function(e){I.listCatTurno=e.data}))}();!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==e)b.a.get(v).then((function(e){I.listCatRestaurantes=e.data}))}();!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==e)b.a.get(f).then((function(e){I.listCatFeriados=e.data}))}();var w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={initialState:I},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=this;b.a.get(x).then((function(t){e.setState({list:t.data}),e.getObjectById()}))}},{key:"getObjectById",value:function(){var e=p.get("value"),t=I.list.filter((function(t){return t.id==e}));this.setState({obj:t}),I.obj=t,this.renderEditionFrom(t)}},{key:"getByClick",value:function(e){return y?(y=null,y=e):y=e,"http://localhost:3002/lista-turnos"==e?(document.getElementById("texto_form").innerHTML="",void(document.getElementById("texto_form").innerHTML="Incluir Turno")):"http://localhost:3002/lista-restaurantes"==e?(document.getElementById("texto_form").innerHTML="",void(document.getElementById("texto_form").innerHTML="Incluir Restaurante")):"http://localhost:3002/lista-feriados"==e?(document.getElementById("texto_form").innerHTML="",void(document.getElementById("texto_form").innerHTML="Incluir Feriados")):void 0}},{key:"clear",value:function(){this.setState({unop:I.unop})}},{key:"save",value:function(){var e={id:"",nome:"",unopId:""},t=document.getElementById("nome");if(e.nome=t.value,e.unopId=g,null!=t.value&&""!=t.value){var n=e.id?"put":"post",a=e.id?"".concat(y,"/").concat(e.id):y;b.a[n](a,e).then((function(e){document.location.reload()}))}else document.getElementById("ms_nome").innerHTML="Preencha o campo nome!"}},{key:"getUpdateList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=C.filter((function(t){return t.id!=e.id}));return t&&n.unshift(e),n}},{key:"updateField",value:function(e){var t=this.state.unop;t[e.target.nome]=e.target.value,this.setState({unop:t})}},{key:"mascara_cnpj",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(e){(e=document.getElementById("cnpj")).value=e.value.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d)/,"$1-$2")}(e)}},{key:"renderEditionFrom",value:function(){if(N=I.list.filter((function(e){return e.id==p.get("value")})),I.list.length>0&&N.length)return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:[" ",N[0].id," - ",N[0].nome]}),Object(h.jsxs)("h3",{children:["CNPJ: ",Object(h.jsx)("span",{className:"cnpj",children:N[0].cnpj})]})]},N[0].id)}},{key:"remove",value:function(e,t,n){b.a.delete("".concat(n,"/").concat(e.id)).then((function(e){document.location.reload()}))}},{key:"getObjectByClick",value:function(e,t,n){k=e,y=n,C=null,C=t}},{key:"hideMsn",value:function(){document.getElementById("ms_nome").innerHTML=""}},{key:"renderTurnos",value:function(){var e=this;if(I.list.length>0)return N=I.list.filter((function(e){return e.id==p.get("value")})),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Turnos Selecionados"}),Object(h.jsx)("th",{scope:"col"})]})}),Object(h.jsxs)("tbody",{children:[this.renderRowsTurnos(),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-dark","data-toggle":"modal","data-target":"#modalSubscriptionForm",onClick:function(){return e.getByClick(O)},children:"Incluir Turno"})})]})]})]})}},{key:"renderRowsTurnos",value:function(){var e=this;if(I.list.length>0&&(N=I.list.filter((function(e){return e.id==p.get("value")})),I.listCatTurno&&N.length>0)){var t=I.listCatTurno.filter((function(e){return e.unopId==N[0].id}));return t.map((function(n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:n.nome}),Object(h.jsx)("td",{children:Object(h.jsx)(c.b,{className:"talbe-links","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return e.getObjectByClick(n,t,O)},children:Object(h.jsx)(j.c,{})})})]},n.id)}))}}},{key:"renderRestaurantes",value:function(){var e=this;if(I.list.length>0)return N=I.list.filter((function(e){return e.id==p.get("value")})),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Restaurantes selecionados"}),Object(h.jsx)("th",{scope:"col"})]})}),Object(h.jsxs)("tbody",{children:[this.renderRowsRestaurantes(),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-dark","data-toggle":"modal","data-target":"#modalSubscriptionForm",onClick:function(){return e.getByClick(v)},children:"Incluir Restaurante"})})]})]})]})}},{key:"renderRowsRestaurantes",value:function(){var e=this;if(I.list.length>0&&(N=I.list.filter((function(e){return e.id==p.get("value")})),I.listCatRestaurantes)){var t=I.listCatRestaurantes.filter((function(e){return e.unopId==p.get("value")}));return C=I.listCatRestaurantes,t.map((function(n){return k=n,Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:n.nome}),Object(h.jsx)("td",{children:Object(h.jsx)(c.b,{className:"talbe-links","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return e.getObjectByClick(n,t,v)},children:Object(h.jsx)(j.c,{})})})]},n.id)}))}}},{key:"renderConfigCalendUnid",value:function(){var e=this;if(I.list.length>0)return N=I.list.filter((function(e){return e.id==p.get("value")})),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Dias selecionados"}),Object(h.jsx)("th",{scope:"col"})]})}),Object(h.jsxs)("tbody",{children:[this.renderRowsCalendUnid(),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-dark","data-toggle":"modal","data-target":"#modalSubscriptionForm",onClick:function(){return e.getByClick(f)},children:"Incluir Feriado"})})]})]})]})}},{key:"renderRowsCalendUnid",value:function(){var e=this;if(I.list.length>0&&(N=I.list.filter((function(e){return e.id==p.get("value")})),I.listCatFeriados)){var t=I.listCatFeriados.filter((function(e){return e.unopId==g}));return C=I.listCatFeriados,t.map((function(n){return k=n,Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:n.nome}),Object(h.jsx)("td",{children:Object(h.jsx)(c.b,{className:"talbe-links","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return e.getObjectByClick(n,t,f)},children:Object(h.jsx)(j.c,{})})})]},n.id)}))}}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{class:"modal fade",id:"modalSubscriptionForm",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{class:"modal-dialog",role:"document",children:Object(h.jsx)("div",{class:"modal-content",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{class:"modal-header text-center",children:[Object(h.jsx)("h4",{class:"modal-title w-100 font-weight-bold",id:"texto_form"}),Object(h.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(h.jsx)("div",{class:"modal-body mx-3",children:Object(h.jsxs)("div",{class:"md-form mb-5",children:[Object(h.jsx)("label",{"data-error":"wrong","data-success":"right",for:"form3",children:"Nome"}),Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"nome",placeholder:"Nome",name:"nome",required:!0,onKeyDown:function(){return e.hideMsn()}}),Object(h.jsx)("small",{id:"ms_nome",className:"vermelho"})]})}),Object(h.jsx)("div",{class:"modal-footer d-flex justify-content-center",children:Object(h.jsxs)("button",{class:"btn btn-success col-md-12",onClick:function(){return e.save()},children:["Incluir",Object(h.jsx)("i",{class:"fas fa-paper-plane-o ml-1"})]})}),Object(h.jsx)("div",{class:"modal-footer d-flex justify-content-center",children:Object(h.jsx)("button",{type:"button",class:"btn col-md-12","data-dismiss":"modal",children:"Cancelar"})})]})})})}),Object(h.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{class:"modal-dialog",role:"document",children:Object(h.jsxs)("div",{class:"modal-content",children:[Object(h.jsxs)("div",{class:"modal-header",children:[Object(h.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Excluir"}),Object(h.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(h.jsx)("div",{class:"modal-body",children:"Tem certeza que quer excluir?"}),Object(h.jsxs)("div",{class:"modal-footer",children:[Object(h.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Fechar"}),Object(h.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){return e.remove(k,C,y)},children:"Confirmar a Exclus\xe3o"})]})]})})}),Object(h.jsx)("div",{id:"wrapper",children:Object(h.jsxs)("section",{id:"intro",className:"main",children:[Object(h.jsx)("h2",{children:"Configura\xe7\xe3o da UNOP"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("section",{id:"form-inser-edit",children:[this.renderEditionFrom(),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{id:"tables-insert-edit-all",children:[Object(h.jsxs)("section",{children:[Object(h.jsx)("h3",{children:"Turnos"}),this.renderTurnos()]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h3",{children:"Restaurantes"}),this.renderRestaurantes()]})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h3",{children:"Configurar Calend\xe1rio da Unidade"}),this.renderConfigCalendUnid()]})]})]})]})})]})}}]),n}(s.a.Component),B=n(20),R="http://localhost:3002/unops",E="http://localhost:3002/lista-turnos",S=null,T=null,M=null,L={unop:{nome:"",cnpj:"","situa\xe7\xe3o":"","lista-turnos":[],"lista-restaurantes":[],"lista-feriados":[]},list:[]};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==e)return b.a.get(R).then((function(e){L.list=e.data}));var t=[];L.list=t,L.list.push(e),L.list}();var P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={initialState:L},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=this;b.a.get(R).then((function(t){e.setState({list:t.data})}))}},{key:"getObjectByClick",value:function(e,t){T=e,S=t,M=null}},{key:"getElSearch",value:function(){for(var e=document.getElementById("inputAddress").value.toLowerCase(),t=document.getElementById("tbody"),n=0;n<t.childNodes.length;n++)for(var a=!1,s=t.childNodes[n],l=s.childNodes,i=0;i<l.length;i++){if(null!=l[i].childNodes[0].nodeValue){var c=l[i].childNodes[0].nodeValue.toLowerCase();(c.indexOf(e)>=0||c==e&&""!=e)&&(a=!0)}a?(console.log(s),s.style.display="table-row"):s.style.display="none"}}},{key:"getElSearchSelect",value:function(){for(var e=document.getElementById("selectBusca").value.toLowerCase(),t=document.getElementById("tbody"),n=0;n<t.childNodes.length;n++)for(var a=!1,s=t.childNodes[n],l=s.childNodes,i=0;i<l.length;i++){if(null!=l[i].childNodes[0].nodeValue)e!=l[i].childNodes[0].nodeValue.toLowerCase()&&"Situa\xe7\xe3o"!=e||(a=!0);a?(console.log(s),s.style.display="table-row"):s.style.display="none"}}},{key:"clear",value:function(){this.setState({unop:L.unop})}},{key:"save",value:function(){var e=this,t=this.state.unop,n=t.id?"put":"post",a=t.id?"".concat(R,"/").concat(t.id):R;b.a[n](a,t).then((function(t){var n=e.getUpdateList(t.data);e.setState({unop:L.unop,list:n})}))}},{key:"getUpdateList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=L.list.filter((function(t){return t.id!=e.id}));return t&&n.unshift(e),n}},{key:"updateField",value:function(e){var t=this.state.unop;t[e.target.nome]=e.target.value,this.setState({unop:t})}},{key:"load",value:function(e){this.setState({unop:e}),window.location.href="/insert-edit?value="+e.id}},{key:"remove",value:function(e){var t=this;b.a.delete("".concat(R,"/").concat(e.id)).then((function(n){console.log(n);t.getUpdateList(e,!1)})),document.location.reload()}},{key:"renderTable",value:function(){return Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Lista de UNOPS"}),Object(h.jsx)("th",{scope:"col",children:"C\xf3digo da UNOP"}),Object(h.jsx)("th",{scope:"col",children:"Situa\xe7\xe3o"}),Object(h.jsx)("th",{scope:"col",children:"Edi\xe7\xe3o"})]})}),Object(h.jsxs)("tbody",{id:"tbody",children:[this.renderRows(),Object(h.jsxs)("tr",{className:"trTable",children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"/inserir",className:"btn btn-dark",children:"Incluir"})})]})]})]})}},{key:"renderRows",value:function(){var e=this;return!1?(L.list=[],L.list.map((function(t){return T=t,Object(h.jsxs)("tr",{id:t.id,className:"trTable",children:[Object(h.jsx)("th",{scope:"col",children:t.nome}),Object(h.jsx)("td",{children:t.id}),Object(h.jsx)("td",{children:t.situa\u00e7\u00e3o}),Object(h.jsxs)("td",{children:[Object(h.jsx)("span",{class:"",children:Object(h.jsx)(c.b,{className:"talbe-links","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return e.getObjectByClick(t,E)},children:Object(h.jsx)(j.c,{})})}),Object(h.jsx)("span",{class:"",children:Object(h.jsx)(c.b,{onClick:function(){return e.load(t)},className:"talbe-links-home visualizar",children:Object(h.jsx)(j.a,{})})})]})]},t.id)}))):L.list.map((function(t){return Object(h.jsxs)("tr",{className:"trTable",children:[Object(h.jsx)("th",{scope:"col",children:t.nome}),Object(h.jsx)("td",{children:t.id}),Object(h.jsx)("td",{children:t.situa\u00e7\u00e3o}),Object(h.jsxs)("td",{children:[Object(h.jsx)("span",{class:"",children:Object(h.jsx)(c.b,{className:"talbe-links visualizar","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return e.getObjectByClick(t,E)},children:Object(h.jsx)(j.c,{})})}),Object(h.jsx)("span",{class:"",children:Object(h.jsx)(c.b,{onClick:function(){return e.load(t)},className:"talbe-links-home visualizar",children:Object(h.jsx)(j.a,{})})})]})]},t.id)}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{class:"modal-dialog",role:"document",children:Object(h.jsxs)("div",{class:"modal-content",children:[Object(h.jsxs)("div",{class:"modal-header",children:[Object(h.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Excluir"}),Object(h.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(h.jsx)("div",{class:"modal-body",children:"Tem certeza que quer excluir?"}),Object(h.jsxs)("div",{class:"modal-footer",children:[Object(h.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Fechar"}),Object(h.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){return e.remove(T,M,S)},children:"Confirmar a Exclus\xe3o"})]})]})})}),Object(h.jsx)("div",{id:"wrapper",children:Object(h.jsxs)("section",{id:"intro",className:"main",children:[Object(h.jsx)("h2",{children:"Lista de UNOPS"}),Object(h.jsx)("section",{id:"filtros",children:Object(h.jsxs)("form",{class:"nav-form",children:[Object(h.jsxs)("div",{className:"input-group input-group-search-top",children:[Object(h.jsx)("input",{type:"search",className:"form-control form-control-lg",id:"inputAddress",placeholder:"Pesquisar UNOP",onKeyUp:function(){return e.getElSearch()}}),Object(h.jsx)("div",{className:"input-group-btn ",children:Object(h.jsx)("button",{type:"submit",class:"btn btn-default",children:Object(h.jsx)(j.b,{})})})]}),Object(h.jsx)("div",{className:"form-group form-control-select",children:Object(h.jsxs)("select",{className:"form-control form-control-lg",id:"selectBusca",onChange:function(){return e.getElSearchSelect()},children:[Object(h.jsx)("option",{children:"Situa\xe7\xe3o"}),Object(h.jsx)("option",{value:"Ativa",children:"Ativa"}),Object(h.jsx)("option",{value:"Inativa",children:"Inativa"})]})})]})}),Object(h.jsxs)("section",{id:"lista-unops",children:[this.renderTable(),Object(h.jsx)("nav",{"aria-label":"Navega\xe7\xe3o de p\xe1gina exemplo",children:Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{className:"page-item",children:Object(h.jsxs)("a",{className:"page-link page-link-dark-back",href:"#","aria-label":"Anterior",children:[Object(h.jsx)("span",{"aria-hidden":"true",children:"\u2039"}),Object(h.jsx)("span",{className:"sr-only",children:"Anterior"})]})}),Object(h.jsx)("li",{className:"page-item",children:Object(h.jsx)("a",{className:"page-link",href:"#",children:"1"})}),Object(h.jsx)("li",{className:"page-item",children:Object(h.jsx)("a",{className:"page-link",href:"#",children:"2"})}),Object(h.jsx)("li",{className:"page-item",children:Object(h.jsx)("a",{className:"page-link",href:"#",children:"3"})}),Object(h.jsx)("li",{className:"page-item",children:Object(h.jsxs)("a",{className:"page-link page-link-dark-back",href:"#","aria-label":"Pr\xf3ximo",children:[Object(h.jsx)("span",{"aria-hidden":"true",children:"\u203a"}),Object(h.jsx)("span",{className:"sr-only",children:"Pr\xf3ximo"})]})})]})})]})]})})]})}}]),n}(s.a.Component);var U=n(3),A=(new URLSearchParams(window.location.search),"http://localhost:3002/unops"),F={unop:{nome:"",cnpj:"","situa\xe7\xe3o":"","lista-turnos":[],"lista-restaurantes":[],"lista-feriados":[]},list:[],listCat:[],obj:{}},_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={initialState:F},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=this;b.a.get(A).then((function(t){e.setState({lista:t.data})}))}},{key:"clear",value:function(){this.setState({unop:F.unop})}},{key:"save",value:function(){var e={nome:"",cnpj:"","situa\xe7\xe3o":""},t=document.getElementById("nome"),n=document.getElementById("cnpj"),a=document.getElementById("gridRadios1"),s=document.getElementById("gridRadios2"),l=null;if(1==a.checked?l=a.value:1==s.checked&&(l=s.value),null!=t.value&&""!=t.value)if(null!=n.value&&""!=n.value){e.nome=t.value,e.cnpj=n.value,e.situa\u00e7\u00e3o=l;var i=e.id?"put":"post",c=e.id?"".concat(A,"/").concat(e.id):A;b.a[i](c,e).then((function(e){document.location.href="http://localhost:3000/"}))}else document.getElementById("msn_cnpj").innerHTML="Preencha o campo cnpj!";else document.getElementById("ms_nome").innerHTML="Preencha o campo nome!"}},{key:"getUpdateList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.state.lista.filter((function(t){return t.id!=e.id}));return t&&n.unshift(e),n}},{key:"updateField",value:function(e){var t=this.state.unop;t[e.target.nome]=e.target.value,this.setState({unop:t})}},{key:"mascara_cnpj",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(e){(e=document.getElementById("cnpj")).value=e.value.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d)/,"$1-$2")}(e)}},{key:"hideMsn",value:function(){document.getElementById("ms_nome").innerHTML="",document.getElementById("msn_cnpj").innerHTML=""}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("div",{id:"wrapper",children:Object(h.jsxs)("section",{id:"intro",className:"main",children:[Object(h.jsx)("h2",{children:"Configura\xe7\xe3o da UNOP"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{for:"inputPassword3",className:"col-sm-2 col-form-label",children:"Nome"}),Object(h.jsxs)("div",{className:"col-sm-10",children:[Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"nome",placeholder:"Nome",name:"nome",required:!0,onKeyDown:function(){return e.hideMsn()}}),Object(h.jsx)("small",{className:"vermelho",id:"ms_nome"})]})]}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{for:"inputPassword3",className:"col-sm-2 col-form-label",children:"CNPJ"}),Object(h.jsxs)("div",{className:"col-sm-10",children:[Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Digite o CNPJ",id:"cnpj",name:"cnpj",required:!0,onKeyUp:function(){return e.mascara_cnpj()},maxLength:"18",onKeyDown:function(){return e.hideMsn()}}),Object(h.jsx)("small",{className:"vermelho",id:"msn_cnpj"})]})]}),Object(h.jsx)("fieldset",{className:"form-group",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Situa\xe7\xe3o"}),Object(h.jsxs)("div",{className:"col-sm-10",children:[Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)("input",{className:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios1",value:"Ativa",checked:!0}),Object(h.jsx)("label",{className:"form-check-label",for:"gridRadios1",children:"Ativa"})]}),Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)("input",{className:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios2",value:"Inativa"}),Object(h.jsx)("label",{className:"form-check-label",for:"gridRadios2",children:"Inativa"})]})]})]})}),Object(h.jsx)("div",{className:"form-group row",children:Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e.save()},children:"Incluir"})})})]})]})})})}}]),n}(s.a.Component),$=(n(68),n(38)),H={icon:Object(h.jsx)($.a,{}),titulo:"Home","sub-titulo":"Titulo menu","sub-titulo2":"Lista de UNOPs"},D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"toogleBanner",value:function(e){document.getElementById("lista");document.getElementById("galeriaBannerId").style.display=1==e?"block":"none"}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",id:"menu",children:[Object(h.jsx)("button",{className:"navbar-toggler",id:"btn-busca-mobile",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("nav",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto sub-menu",id:"lista",children:[Object(h.jsxs)("li",{className:"nav-item active",children:[H.icon," ",Object(h.jsx)("span",{children:"/"})]}),Object(h.jsxs)("li",{className:"nav-item active",children:[H.titulo," ",Object(h.jsx)("span",{children:"/"})]}),Object(h.jsxs)("li",{className:"nav-item",children:[H["sub-titulo"]," ",Object(h.jsx)("span",{children:"/"})]}),Object(h.jsx)("li",{className:"nav-item",children:H["sub-titulo2"]})]})})]}),Object(h.jsx)("div",{className:"all",children:Object(h.jsx)("div",{className:"all-content",children:Object(h.jsxs)(U.c,{children:[Object(h.jsx)(U.a,{exact:!0,path:"/",component:P}),Object(h.jsx)(U.a,{path:"/insert-edit",component:w}),Object(h.jsx)(U.a,{path:"/inserir",component:_}),Object(h.jsx)(U.a,{path:"/lista",component:B})]})})})]})}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(h.jsx)(c.a,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.c9ecaaee.chunk.js.map