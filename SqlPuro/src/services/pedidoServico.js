import * as PedidoRepositorio from '../database/pedidoRepositorio.js';

export const criarPedido = async (dadosPedido) => {
  if (!dadosPedido.cliente || !dadosPedido.item || !dadosPedido.quantidade) {
    throw new Error('Faltam dados obrigatórios: cliente, item ou quantidade.');
  }
  const novoPedido = await PedidoRepositorio.criar(dadosPedido);
  return novoPedido;
};

export const listarPedidos = async () => {
  const pedidos = await PedidoRepositorio.buscarTodos();
  return pedidos;
};

export const atualizarStatusPedido = async (id, novoStatus) => {
  const statusPermitidos = ["Pedido Recebido", "Em preparo", "Pronto", "Entregue"];
  if (!statusPermitidos.includes(novoStatus)) {
    throw new Error(`Status inválido: '${novoStatus}'. Use um destes: ${statusPermitidos.join(', ')}`);
  }

  const pedidoExistente = await PedidoRepositorio.buscarPorId(id);
  if (!pedidoExistente) {
    throw new Error(`Pedido com ID ${id} não encontrado.`);
  }

  const pedidoAtualizado = await PedidoRepositorio.atualizarStatus(id, novoStatus);
  if (!pedidoAtualizado) {
     throw new Error(`Falha ao atualizar o status do pedido ID ${id}.`);
  }
  return pedidoAtualizado;
};

export const buscarPedidosPorStatus = async (status) => {
  const pedidos = await PedidoRepositorio.buscarPorStatus(status);
  return pedidos;
};
