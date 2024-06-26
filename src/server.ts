
/*
interface User {
    birthYear: number
}

function calculateAgeOfUser(user: User) {
    return new Date().getFullYear() - user.birthYear

    }

calculateAgeOfUser({ birthYear: 40

})   */


// criar o desenolvimento para typescript npm -D typescript e dps npx --init, vai criar o arquivo json, tsconfig.json

// target qual versão do java script vai converter o código. para converter npx -tsc + o caminho do arquivo

// instalar o fastify no server.ts

import { app } from "./routes/app"
import { env } from "./env"

/// com a variavel app eu posso fazer os caminhos/rotas app. GET, POST, PUT PATCH, DELETE

/// exemplo: http://localhost:3333/hello

/* app.get('/hello, () => {
     return 'Hello World '
 }) */
 /*
app.get('/hello', async () => {
    const transaction = await knex('transactions').insert ({
        id:crypto.randomUUID(),
        title: 'Transação teste',
        amount: 1000,
    }).returning('*')

    return transaction
}) */



app.listen({port: env.PORT,
}).then(()=>{
    console.log('HTTP Server Running!')
})


// app.listen iniciar o server

// node instalar o typesript npm install -D @types/node

// instalar o npm install tsx -D

// rodar automarizado e nao criar arquivos JS e manter o typescript: npx tsx caminho da pasta, porém em produção converter e rodar em javascript

/*  script para automatizar o server no package json   "scripts": {
    "dev": "tsx watch src/server.ts" */

// EcmaScript padrozinar o código

// formas de se conexar aos bancos de dados: drivers (nativos, nivel mais baixo de conexão)
// query builders ( construtor de querys) - knex. (usar linguaguem e ele converte pra o SQL)
// ORMS 


// plugins separar pedaços da nossa aplicação em outros arquivos
