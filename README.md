
O Api Rest deste teste foi desenvolvida com json-server, para subir o servidor json acesse o diretório backend 
apravés do prompt: cd backend 

E suba o servidor através do node: npm start

Execute "npm start" também na raiz do projéto para subir o servidor que possui o front-end.

A página principal possui a lista de Unops, cada elemento da lista possui um ícone para edição e outro para exlusão.

Possui dois campos de busca, no campo de texto é possível filtar pelo nome e pelo código da unop, no campo
drop-dwon é possível filtrar pela situação.

Clicando no ícone de Edição o usuário é direcionado para outra página, onde é possível incluir e excluir as listas de turnos, restaurantes e feriados da unops. Nesta página de edição os campos código, nome e cnpj não são editáveis.Ao clicar no ícone de exclusão, é exibida uma modal dando opção ao usuádio de confirmar ou cancelar a exclusão do ítem. Nesta página existe também botões para incluir turno, restaurante e feriado.

Na página principal, ao clicar em incluir é aberta uma página com um formulário para incluir uma nova unops com os campos nome cnpj e situação, o campo cnpj pussui uma máscara, no qual só é possível digitar caractéres numéricos, o campo Código é auto-incremente. Ambos os código, nome e cnpj são obrigatórios. 





