<br />
<p align="center"> <img src="https://github.com/shiteles/sisterhood-tech/blob/main/material/SISTERHOOD%20TECH.gif"  width ="50%"> </p>
<br />

<br>
<br>
<h1 align="center">
    <br>
    <p align="center"> Projeto Final {Reprograma} - Sisterhood Tech 👭:computer: <p>
</h1>

##### Projeto de conclusão do curso de Desenvolvimento Backend - Todas em Tech | Turma On19 da [{Reprograma}](https://www.reprograma.com.br/).


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
<br>

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