import express from 'express';
import dotenv from 'dotenv';
import pedidoRotas from './src/routes/pedidoRotas.js';
import errorHandler from './src/middlewares/errorHandler.js';


dotenv.config(); 
const app = express(); 

app.use(express.json()); 
app.get('/', (req, res) => {
  res.send('Pedidos da Cafeteria SQL Puro');
});
app.use('/api', pedidoRotas);
app.use(errorHandler);
const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
  console.log(`Servidor SQL Puro a rodar na porta ${PORTA}`);
});
