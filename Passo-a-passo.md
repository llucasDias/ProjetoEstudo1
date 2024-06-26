Primeiro passo: npm init -y (package.jon)

Segundo passo: se for em typescript: npm i -D typescript, (instalar o mesmo e o leitor de binario para leitura)

Terceiro passo: npx tsc --init

Quarto passo: mudar o targe no tsconfig.json para "es2020"

Quinto passo: instalar o framework, nosso caso microframework - fastfity

Sexto passo: Criar o arquivo server.js ou server.ts e fazer o import

Sétimo passo: conexão com o banco e configuração.

Variaveis de ambiente ~sao informações q podem ser diferentes a cada ambiente que nossa aplicação está execução
- ambiente de desenvolvimento // ambiente de produção // ambiente de teste // ambiente de preview

Oitavo passo - criar variaveis de ambiente no .env // colocamos dados sensaviveis e colocar no gitignore

Nono passo - criar o .env.example colocar as variaveis de ambiente utilizadas, evitar os valores caso tenha dados sensiveis

10 passo - criar uma biblioteca especifica para validação de dados. npm i zod

11 passo - Requisitos funcionais, regras de negócio, requisitos de nao negocios.

12 passo - @TYPES PASTA, Para os tipos

# Requisitos funcionais
[x] O usuário deve poder criar uma nova transação;
[x] O usuário deve poder obter um resumo da sua conta
[x] o usuário deve poder listar todas transações que ja ocorreram
[x] o usuário deve poder visualizar uma transação unica

# Regra de negócios
[x] transação de crédito que soma ao valor total que subrtrai 
[x] deve ser possivel identificarmos o usuário entre as requisições
[x] o usuário só pode visualizar transações da qual ele criou

# Requisitos não funcionais - oq usar pra atingir
 
 13 passos automatizar testes, tipos de testes existentes: unitários, integração, e2e - ponta a ponta

 => unitários: unidade isolada da sua aplicação
    => integração: comunicação entre duas ou mais unidades
        => ponta a ponta: simulam um usuário operando a aplicação
            front-end: simula um usuario fazendo o login
            back-end: chamadas HTTP, websockets
            
# Piramide de testes: base da piramide: unitarios, meio: integração, ponta: E2E
- E2E ( não dependem de nenhuma tecnologia, nao dependem de arquitwtura)


usar o describe para categorizar os testes
testes precisam ser excluidos de qlqr contexto. um teste nao pode depender de outro teste.