import pg from 'pg'; 
import dotenv from 'dotenv';

dotenv.config(); 
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((erro, cliente, liberar) => {
  if (erro) {
    return console.error('Erro ao conectar ao banco:', erro.stack);
  }
  console.log('Conexão com banco de dados estabelecida.');
  liberar();
});

export const executarQuery = (textoSql, parametros) => pool.query(textoSql, parametros);

export default pool;
