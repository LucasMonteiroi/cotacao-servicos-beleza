import Cotacao from '../entities/cotacao'

interface CotacaoRepository {
  create: (cotacao: Cotacao) => Promise<Cotacao>
  getById: (id: string) => Promise<Cotacao>
  getAll: () => Promise<Cotacao[]>
  update: (cotacao: Cotacao) => Promise<boolean>
  delete: (id: string) => Promise<boolean>
}

export default CotacaoRepository
