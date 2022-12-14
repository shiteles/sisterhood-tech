<br />
<p align="center"> <img src="https://github.com/shiteles/sisterhood-tech/blob/main/material/SISTERHOOD%20TECH.gif"  width ="50%"> </p>
<br />

<br>
<br>
<h1 align="center">
    <br>
    <p align="center"> Projeto Final {Reprograma} - Sisterhood Tech 👭:computer: <p>
</h1>

## <b> Projeto de conclusão do curso de Desenvolvimento Backend - Todas em Tech | Turma On19 da [{Reprograma}](https://www.reprograma.com.br/) </b> :purple_heart:
---
## :dart: Objetivo 

<br>

O projeto tem como objetivo conectar mulheres da tecnologia que estão iniciando na carreira com mulheres que já tem uma vivência e desejam compartilhar conhecimento e de alguma forma instruir e ajudar iniciantes.
A intenção é fazer essa ligação entre mulheres e mostrar que não estamos sozinhas e que podemos nos fortalecer e criar laços de empoderamento e fortalecimento para diminuir a lacuna de gênero na área tech.
<br>
<br>

---


## 📁 Arquitetura do Projeto

<br>

```
 📁SISTERHOOD-TECH
   |
   |--📁material
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 menteeController.js
   |  |    |- 📄 mentorController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 dbConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 menteeModel.js
   |  |    |- 📄 mentorModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 index.js
   |  |    |- 📄 menteeRoutes.js
   |  |    |- 📄 mentorRoutes.js
   |  ||--📁 test
   |  |    |- 📄 mentee.test.js
   |  |    |- 📄 mentor.test.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 .eslintrc.json
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
<br>

---
## :floppy_disk: Tecnologias e Dependências Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação utilizada nesse projeto. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token para segurança de dados.|
| `bcrypt`| Biblioteca para encriptação de dados.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `jest`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação do projeto.|
| `Render`| Utilizado para realizar o deploy da aplicação e hospedar documentação.|
---

## :construction_worker: Instalação

<br>

```ps
# Clonar o repositório
$ git clone https://github.com/shiteles/sisterhood-tech

# Entrar na pasta do repositório
$ cd sisterhood-tech

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start
```
<br>
---
## 🔐 Testando Rotas de Login e Rotas Com ou Sem Proteção

<br>

 🛣️ Todas as rotas existentes neste projeto:

- Mentee

| Verbo  |   EndPoint                         |        Descrição da Rota                | Status | Auth |
|--------|------------------------------------|-----------------------------------------|--------|------|
| GET    | /sisterhoodtech/mentee/all         | Listar todas as mentoradas              |   200  |  ❌  |
| GET    | /sisterhoodtech/mentee/:id         | Filtrar mentorada por id                |   200  |  ✔️  |
| GET    | /sisterhoodtech/mentee/            | Filtrar mentorada por nome              |   200  |  ❌  |
| POST   | /sisterhoodtech/mentee/add         | Adicionar uma nova mentorada            |   201  |  ❌  |
| POST   | /sisterhoodtech/mentee/login       | Devolve o token da mentorada            |   200  |  ❌  |
| PATCH  | /sisterhoodtech/mentee/:id         | Altera as informações de uma mentorada  |   200  |  ✔️  |
| DELETE | /sisterhoodtech/mentee/delete/:id  | Remove uma mentorada                    |   200  |  ✔️  |

- Mentor

| Verbo  |   EndPoint                         |        Descrição da Rota                | Status | Auth |
|--------|------------------------------------|-----------------------------------------|--------|------|
| GET    | /sisterhoodtech/mentor/all         | Listar todas as mentoras                |   200  |  ❌  |
| GET    | /sisterhoodtech/mentor/:id         | Filtrar mentora por id                  |   200  |  ✔️  |
| GET    | /sisterhoodtech/mentor/            | Filtrar mentora por nome                |   200  |  ❌  |
| POST   | /sisterhoodtech/mentor/add         | Adicionar uma nova mentora              |   201  |  ❌  |
| POST   | /sisterhoodtech/mentor/login       | Devolve o token da mentora              |   200  |  ❌  |
| PATCH  | /sisterhoodtech/mentor/:id         | Altera as informações de uma mentora    |   200  |  ✔️  |
| DELETE | /sisterhoodtech/mentor/delete/:id  | Remove uma mentora                      |   200  |  ✔️  |
<br>

 :lock: **PROTEÇÃO** Para testar via Postman, é necesário realizar login para ter acesso ao token e passar no header para autenticação.


---
## :test_tube: Teste Jest

</br>

:arrow_heading_up: Instalar o Jest dentro da pasta Sisterhood-Tech

- Inicialize o comando de instalação do Jest `npm install --save-exact jest@28.1.0 --save-dev`
- Incluir o script no package_json  `"test": "jest --watchAll"`.
- Inicialize com o comando `npm run test` para testar.

<br>