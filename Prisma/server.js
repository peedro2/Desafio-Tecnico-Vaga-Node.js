import express from 'express';
import dotenv from 'dotenv';
import pedidoRoutes from './src/routes/pedidoRotas.js';
import errorHandler from './src/middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', pedidoRoutes);
app.get('/', (req, res) => { 
  res.send('Pedidos da Cafeteria Prisma');});
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Prisma a rodar na porta ${PORT}`);
});