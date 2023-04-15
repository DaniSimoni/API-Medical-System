<h1>API Medical System</h1>
<h3>Aplicativo API para Gerenciamento de Médicos, Enfermeiros e Pacientes</h3>

<h2>Contexto:</h2>

<p>A API Medical System executa o gerenciamento dos cadastros de médicos, enfermeiros e pacientes através da insersão, busca e alteração no banco de dados. </p>
<p>A API Medical System fornece o registro de atendimento dos médicos e a atualização do status do paciente quando atendido.</p>
<p>________________________</p>
<p>The Medical System API manages the records of doctors, nurses and patients by inserting, searching and changing the database. </p>
<p>The Medical System API provides physicians' attendance record and patient status update when attended.</p>



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
