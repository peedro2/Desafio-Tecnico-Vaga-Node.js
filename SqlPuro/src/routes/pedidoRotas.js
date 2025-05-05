import { Router } from 'express';
import {
  criarPedido,
  listarPedidos,
  atualizarStatusPedido,
  buscarPedidosPorStatus
} from '../controllers/pedidoControles.js';

const router = Router();


router.post('/pedidos', criarPedido);

router.get('/pedidos', listarPedidos);

router.patch('/pedidos/:id', atualizarStatusPedido);

router.get('/pedidos/status/:status', buscarPedidosPorStatus);

export default router;
