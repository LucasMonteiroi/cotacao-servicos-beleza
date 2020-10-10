export default interface Produto {
  id: string
  nome: string
  marca: string
  // Valor pago pelo produto
  valorCusto: number
  // Quantos uso rende
  rendimento: number
  // Rendimento * Valor custo
  valorVenda: number
  ativo: boolean
}
