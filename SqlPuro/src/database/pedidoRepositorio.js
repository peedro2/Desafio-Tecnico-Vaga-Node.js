import { executarQuery } from '../config/db.js';

export const criar = async (dadosPedido) => {
  const { cliente, item, quantidade, observacoes } = dadosPedido;
  const statusInicial = "Pedido Recebido";
  const sql = `
    INSERT INTO "Pedido" (cliente, item, quantidade, observacoes, status, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
    RETURNING *;
  `;
  const parametros = [cliente, item, quantidade, observacoes, statusInicial];
  try {
    const resultado = await executarQuery(sql, parametros);
    return resultado.rows[0];
  } catch (erro) {
    console.error("Erro ao criar pedido:", erro);
    throw erro;
  }
};

export const buscarTodos = async () => {
  const sql = 'SELECT * FROM "Pedido" ORDER BY "createdAt" DESC;';
  try {
    const resultado = await executarQuery(sql);
    return resultado.rows;
  } catch (erro) {
    console.error("Erro ao buscar todos pedidos:", erro);
    throw erro;
  }
};

export const buscarPorId = async (id) => {
  const sql = 'SELECT * FROM "Pedido" WHERE id = $1;';
  const parametros = [id];
  try {
    const resultado = await executarQuery(sql, parametros);
    return resultado.rows[0];
  } catch (erro) {
    console.error(`Erro ao buscar pedido ID ${id}:`, erro);
    throw erro;
  }
};

export const atualizarStatus = async (id, novoStatus) => {
  const sql = `
    UPDATE "Pedido"
    SET status = $1, "updatedAt" = NOW()
    WHERE id = $2
    RETURNING *;
  `;
  const parametros = [novoStatus, id];
  try {
    const resultado = await executarQuery(sql, parametros);
    return resultado.rows[0];
  } catch (erro) {
    console.error(`Erro ao atualizar status pedido ID ${id}:`, erro);
    throw erro;
  }
};

export const buscarPorStatus = async (status) => {
  const sql = 'SELECT * FROM "Pedido" WHERE status = $1 ORDER BY "createdAt" DESC;';
  const parametros = [status];
  try {
    const resultado = await executarQuery(sql, parametros);
    return resultado.rows;
  } catch (erro) {
    console.error(`Erro ao buscar por status ${status}:`, erro);
    throw erro;
  }
};
