import { z } from 'zod';

export const criarPedidoSchema = z.object({
  cliente: z.string({
    required_error: "O nome do cliente é obrigatório.",
    invalid_type_error: "O nome do cliente deve ser um texto."
  }).min(1, { message: "O nome do cliente não pode ficar em branco." }),

  item: z.string({
    required_error: "O nome do item é obrigatório.",
    invalid_type_error: "O nome do item deve ser um texto."
  }).min(1, { message: "O nome do item não pode ficar em branco." }),

  quantidade: z.number({
    required_error: "A quantidade é obrigatória.",
    invalid_type_error: "A quantidade deve ser um número."
  }).int({ message: "A quantidade deve ser um número inteiro (sem casas decimais)." })
    .positive({ message: "A quantidade deve ser maior que zero." }),

  observacoes: z.string({
    invalid_type_error: "As observações devem ser um texto."
  }).optional(), 
});

export const atualizarStatusSchema = z.object({
  status: z.string({
    required_error: "O novo status é obrigatório.",
    invalid_type_error: "O status deve ser um texto."
  }).min(1, { message: "O status não pode ficar em branco." })
});
