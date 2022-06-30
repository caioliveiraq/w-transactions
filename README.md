<h1 align="center"> Warren Test</h1>

* [Descrição do projeto](#descrição-do-projeto)
* [Funcionalidades da aplicação](#funcionalidades-da-aplicação)
* [Acesso ao projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)

##  Descrição do projeto
Aplicação front-end para buscar e listar transações financeiras através de API(s) externa(s).
##  Funcionalidades da aplicação

- `Listagem Inicial`: Realiza a busca transações ao carregar a aplicação
- `Busca por Título`: Filtra a lista redenrizada conforme o título informado.
- `Busca por Status`: Busta através da API as as transações com o status selecionado e filtra novamente o Título (caso exista).
- `Abertura de Transação`: Realiza a busca de transação por ID através da API e demonstra em tela o título, status (barra de progresso), remetente, destinatário e valores referentes.

## Acesso ao projeto
O projeto exige a instalação do <a href="https://nodejs.org/">NodeJs</a> e <a href="https://vuejs.org/">VueJS</a> para compilar e simular a aplicação, após esta etapa podem ser executadas as seguintes ações:

### Compilar e simular ambiênte
```
npm run serve
```

### Executar testes unitários
```
npm run test:unit
```

### Para customizar
Veja [Referencias de configuração](https://cli.vuejs.org/config/).

##  Tecnologias utilizadas

- VueJS v2.0
- VueCLI 4.5.18
- TypeScript v3.9.6
- Jest v24.0.19
- Axios v0.27.2