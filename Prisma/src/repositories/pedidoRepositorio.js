
import prisma from '../config/prisma.js';


export const criar = async (dadosPedido) => {

  const novoPedido = await prisma.pedido.create({
    data: dadosPedido,
  });
  return novoPedido;
};

export const buscarTodos = async () => {

  const pedidos = await prisma.pedido.findMany();
  return pedidos;
};

export const buscarPorId = async (id) => {
  const pedido = await prisma.pedido.findUnique({
    where: { id: parseInt(id) },
  });
  return pedido;
};

export const atualizarStatus = async (id, novoStatus) => {

  const pedidoAtualizado = await prisma.pedido.update({
    where: { id: parseInt(id) },
    data: { status: novoStatus },
  });
  return pedidoAtualizado;
};

export const buscarPorStatus = async (status) => {

  const pedidos = await prisma.pedido.findMany({
    where: { status: status },
  });
  return pedidos;
};
