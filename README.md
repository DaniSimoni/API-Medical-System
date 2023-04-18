<h1>API Medical System</h1>
<h3>Aplicativo API para Gerenciamento de Médicos, Enfermeiros e Pacientes</h3>

<h2>Contexto:</h2>

<p>A API Medical System executa o gerenciamento dos cadastros de médicos, enfermeiros e pacientes através da insersão, busca e alteração no banco de dados. </p>
<p>A API Medical System fornece o registro de atendimento dos médicos e a atualização do status do paciente quando atendido.</p>
<p>_________________________________________________</p>
<p>The Medical System API manages the records of doctors, nurses and patients by inserting, searching and changing the database. </p>
<p>The Medical System API provides physicians' attendance record and patient status update when attended.</p>
<p>_________________________________________________</p>


<h2>Tecs:</h2>

| Linguagem | Documentação |
| ------ | ------ |
| JavaScript | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript] |


| Framework / Plugins | Documentação |
| ------ | ------ |
| Express | [https://expressjs.com/pt-br/] |
| Sequelize | [https://sequelize.org/] |
| Node.JS | [https://nodejs.org/en] |
| Nodemon | [https://www.npmjs.com/package/nodemon] |
<p>_________________________________________________</p>


<h2>Instalação/Installation </h2>

Para iniciar o aplicativo começamos pelo [Node.js] v8+ usando os comandos abaixo para a instalação das dependências e iniciar o servidor.


```sh
cd API_MEDICAL_SYSTEM
npm i
npm start
```

Na sequência instalaremos o[Express.JS] usando os comando abaixo: 

```sh
npm i express
```

Instalaremos agora o [Sequelize] para fazer a integração com banco de dados. 

```sh
npm i --save sequelize
npm i --save pg pg-hstore
```

Por fim, instalaremos o Nodemon para poder atualizar o servidor automaticamente.

```sh
npm i nodemon
```
<p>_________________________________________________</p>

<h2>Padrões Utilizados</h2>

O projeto foi executado em pastas para oferecer uma melhor compreensão do código. Veja como está idealizado:

- [src] - Pastas Controllers, Models e Database;
- [database] - Pasta com arquivo com a inicialização da rota Sequilize;
- [models] - Arquivos de criação de tabelas no banco de dados;
- [controllers] - Pastas com os arquivos das requisições da aplicação. Constam as pastas patients, doctors, nurses e service;

Nas pastas os arquivos estão separados conforme a sua função. 

A pasta [index.js] que consta no arquivo raiz é o início do projeto, faz a ligação do banco de dados e nele contém as rotas das requisições. 
<p>_________________________________________________</p>

<h2>Requisições, Descrição e Path</h2>

<p>A aplicação consta com 3 sessões de requisições, sendo elas, Patient, Doctor, Nurse. Abaixo você confere as informações principais para a utilização das requisições, suas funções e path's:</p>

<h3>Rotas Patient >>></h3>

```sh
Requisição: createPatient;
Descrição: Cria um paciente novo no banco de dados;
Método: POST;
Path: http://localhost:3333/patient
Modelo do body:
{
    "name": "",
    "gender": "",
	"birth": "YYYY-MM-DD",
    "cpf": "",
    "phone": "",
    "emergency": "",
    "allergy": "",
    "specialCares": "",        
    "healthInsurance": ""
}
```


```sh
Requisição: updatePatient;
Descrição: Atualiza as informações de um paciente já criado no banco de dados;
Método: PUT;
Path: http://localhost:3333/patient/:id
Modelo do body:
{
    "name": "",
    "gender": "",
	"birth": "YYYY-MM-DD",
    "cpf": "",
    "phone": "",
    "emergency": "",
    "allergy": "",
    "specialCares": "",        
    "healthInsurance": ""
}
```

```sh
Requisição: updateStatus;
Descrição: Altera o Status do paciente no banco de dados;
Método: PUT;
Path: http://localhost:3333/patient/:id/status
Modelo do body:
{
	"status": "AGUARDANDO_ATENDIMENTO"
}
```

```sh
Requisição: patientsList;
Descrição: Gera uma lista dos pacientes cadastrados no banco de dados, podendo ser filtrado pelos campos ["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"];
Método: GET;
Path: http://localhost:3333/patient
```

```sh
Requisição: searchPatient;
Descrição: Busca o paciente no banco de dados pelo Id;
Método: GET;
Path: http://localhost:3333/patient/:id
```

```sh
Requisição: deletePatient;
Descrição: Busca o paciente no banco de dados pelo Id e exclui do banco de dados;
Método: DELETE;
Path: http://localhost:3333/patient/:id
```
<p>_________________________________________________</p>

<h3>Rotas Doctor >>></h3>

```sh
Requisição: createDoctor;
Descrição: Cria um médico novo no banco de dados;
Método: POST;
Path: http://localhost:3333/doctor
Modelo do body:
{
	"name": "",
    "gender": "",
    "birth": "YYYY-MM-DD",
    "cpf": "",
    "phone": "",
	"academy": "",
    "crmUf": "",
	"specialization": "",
    "statusDoctor": "" 
}
```


```sh
Requisição: updateDoctor;
Descrição: Atualiza as informações de um médico já criado no banco de dados;
Método: PUT;
Path: http://localhost:3333/doctor/:id
Modelo do body:
{
	"name": "",
    "gender": "",
    "birth": "YYYY-MM-DD",
    "cpf": "",
    "phone": "",
	"academy": "",
    "crmUf": "",
	"specialization": "",
    "statusDoctor": "" 
}
```

```sh
Requisição: updateStatus;
Descrição: Altera o Status do médico no banco de dados;
Método: PUT;
Path: http://localhost:3333/doctor/:id/status
Modelo do body:
{
	"statusDoctor": "Inativo"
}
```

```sh
Requisição: doctorsList;
Descrição: Gera uma lista dos médicos cadastrados, podendo filtrar por ["ATIVO"] ou ["INATIVO"];
Método: GET;
Path: http://localhost:3333/doctor?statusDoctor=status
```

```sh
Requisição: searchDoctor;
Descrição: Busca o médico no banco de dados pelo Id;
Método: GET;
Path: http://localhost:3333/doctor/:id
```

```sh
Requisição: deleteDoctor;
Descrição: Busca o médico pelo Id e exclui do banco de dados;
Método: DELETE;
Path: http://localhost:3333/doctor/:id
```
<p>_________________________________________________</p>

<h3>Rotas Nurse >>></h3>

```sh
Requisição: createNurse;
Descrição: Cria um enfermeiro novo no banco de dados;
Método: POST;
Path: http://localhost:3333/nurse
Modelo do body:
{
    "name": "",
    "gender": "",
    "birth": "YYYY-MM-DD",
    "cpf": "",
    "phone": "",
    "academy": "",
    "cofenUf": ""
}
```


```sh
Requisição: updateNurse;
Descrição: Atualiza as informações de um médico já criado no banco de dados;
Método: PUT;
Path: http://localhost:3333/nurse/:id
Modelo do body:
{
    "name": "",
    "gender": "",
    "birth": "YYYY-MM-DD",
    "cpf": "",
    "phone": "",
    "academy": "",
    "cofenUf": ""
}
```


```sh
Requisição: nurseList;
Descrição: Gera uma lista dos enfermeiros cadastrados no banco de dados;
Método: GET;
Path: http://localhost:3333/nurse
```

```sh
Requisição: searchNurse;
Descrição: Busca o enfermeiro no banco de dados pelo Id;
Método: GET;
Path: http://localhost:3333/nurse/:id
```

```sh
Requisição: deleteNurse;
Descrição: Busca o enfermeiro pelo Id e exclui do banco de dados;
Método: DELETE;
Path: http://localhost:3333/nurse/:id
```
<p>_________________________________________________</p>

<h3>Rotas Service >>></h3>

```sh
Requisição: service;
Descrição: Enviando o body com Id do paciente e Id do médico, inicia o atendimento, atualiza o status do paciente para "Atendido" e incrementa um atendimento na contagem de atendimentos de ambos. 
Método: POST;
Path: http://localhost:3333/service
Modelo do body:
{
    "idPatient": "9",
    "idDoctor": "1"
};
```
<p>_________________________________________________</p>

<h2>Sugestões e Melhorias:</h2>

- FrontEnd - A API pode receber um FrontEnd para melhorar a usabilidade;
- Rotas - A API pode receber novas rotas e oferecer novas funcionalidades, por exemplo, rotas para listar pacientes atendidos por determinado Médico, ou um sistema de login para os usuários do sistema.;
- As especificações de cada model pode ser aprimorada;
- ...
