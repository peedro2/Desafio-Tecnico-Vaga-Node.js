Desafio Técnico – Vaga Node.js

Desafio: API de Gestão de Pedidos de Cafeteria

API REST para gestão de pedidos de uma cafeteria, desenvolvida em Node.js com Express. O desafio consiste em duas implementações da mesma API:
1° Usando Prisma ORM (modelo de dados, migrations e integração com banco via Prisma)
2° Usando SQL puro (consultas manuais via pg, mysql2, etc. – sem ORMs)


Tecnologias Utilizadas
Node.js - Express.js - PostgreSQL- Prisma - pg (SQL Puro) - dotenv - zod (para validação)


Download e Instalação
Clone o Repositório:git clone <URL_DO_SEU_REPOSITORIO>
cd Desafio-Tecnico-Vaga-Node.js

Crie os Ficheiros .env nas duas pastas Prisma e SqlPuro
Em ambos os ficheiros .env, adicione a linha com a sua conexão do PostgreSQL. 
ex: DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@SEU_HOST:SUA_PORTA/NOME_DA_BASE?schema=public"
Instale os Pacotes: Execute npm install em cada pasta para baixar as bibliotecas


Configuração do Banco de Dados
Você precisa de uma base de dados PostgreSQL e da tabela Pedido. Escolha UMA das opções abaixo:
Esta opção cria a base de dados (se não existir) e a tabela Pedido automaticamente.
Certifique-se que a DATABASE_URL no .env da pasta Prisma está correta.
Navegue até a pasta Prisma no terminal.
Execute o comando de migração do Prisma: npx prisma migrate dev --name init
Ou usar Configuração Manual (Para SQL Puro ou se não usar Prisma Migrate)
Crie a Base de Dados: Use um cliente SQL (Beekeeper, DBeaver, psql) para criar a base de dados especificada na sua DATABASE_URL.
Conectado à base de dados criada, execute o seguinte comando para criar a tabela Pedido:

 { CREATE TABLE "Pedido" (
    "id" SERIAL PRIMARY KEY,
    "cliente" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "observacoes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pedido Recebido',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
); }


Como Executar
Após a instalação e configuração do banco de dados, pode iniciar os servidores.
versão Prisma:
cd Prisma
npm run dev
ou
versão SQL Puro:
cd SqlPuro
npm run dev

Endpoints da API
Ambas as versões contem os seguintes endpoints:
Criar Pedido
Método: POST - URL: /api/pedidos - Corpo (Body - JSON):{ "cliente": "Nome do Cliente",  "item": "Nome do Item Pedido",  "quantidade": 1,  "observacoes": "Alguma observação)" }
Listar Todos os Pedidos
Método: GET - URL: /api/pedidos - Resposta Sucesso (200 OK): JSON com um array de todos os pedidos.
Atualizar Status do Pedido
Método: PATCH - URL: /api/pedidos/:id (Substitua :id pelo ID do pedido) - Corpo (Body - JSON): {  "status": "Novo Status" // Ex: "Em preparo", "Pronto", "Entregue"}
Buscar Pedidos por Status
Método: GET - URL: /api/pedidos/status/:status (Substitua :status pelo status desejado) - Resposta Sucesso (200 OK): JSON com um array dos pedidos com o status especificado.

Como Testar
Use ferramentas como Insomnia  ou Postman  para enviar requisições HTTP para os endpoints
