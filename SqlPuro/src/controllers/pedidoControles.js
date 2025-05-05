import * as PedidoServico from '../services/pedidoServico.js';
import { criarPedidoSchema, atualizarStatusSchema } from '../schemas/pedidoSchema.js';

export const criarPedido = async (req, res, next) => { 
  try {
    const validacao = criarPedidoSchema.safeParse(req.body);
    if (!validacao.success) {
      return res.status(400).json({ 
        message: "Erro de validação", 
        errors: validacao.error.flatten().fieldErrors 
      });
    }

    const dadosValidados = validacao.data;
    const novoPedido = await PedidoServico.criarPedido(dadosValidados);
    res.status(201).json({ message: "Pedido criado com sucesso!", data: novoPedido });
  } catch (erro) {
    next(erro); 
  }
};

export const listarPedidos = async (req, res, next) => { 
  try {
    const todosPedidos = await PedidoServico.listarPedidos();
    res.status(200).json({ data: todosPedidos });
  } catch (erro) {
    next(erro); 
  }
};

export const atualizarStatusPedido = async (req, res, next) => { 
  try {
    const { id } = req.params;
    
    const validacao = atualizarStatusSchema.safeParse(req.body);
    if (!validacao.success) {
      return res.status(400).json({ 
        message: "Erro de validação", 
        errors: validacao.error.flatten().fieldErrors 
      });
    }

    const { status } = validacao.data;

    const pedidoAtualizado = await PedidoServico.atualizarStatusPedido(id, status);
    res.status(200).json({ message: `Status do pedido ${id} atualizado!`, data: pedidoAtualizado });
  } catch (erro) {
    next(erro); 
  }
};

export const buscarPedidosPorStatus = async (req, res, next) => { 
  try {
    const { status } = req.params;
    const pedidos = await PedidoServico.buscarPedidosPorStatus(status);
    res.status(200).json({ data: pedidos });
  } catch (erro) {
    next(erro); 
  }
};
