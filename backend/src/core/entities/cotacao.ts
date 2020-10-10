export default interface Cotacao {
  id: string
  idCliente: string
  dataCotacao: Date
  produtos: []
  valorMaoDeObra: number
  valorFinalCusto: number
  valorFinalTotal: number
}
