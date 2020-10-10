import Cotacao from '../entities/cotacao'

interface CotacaoRepository {
  create: (cotacao: Cotacao) => Promise<Cotacao>
  getById: (id: String) => Promise<Cotacao>
  getAll: () => Promise<Cotacao[]>
  update: (idCotacao: string, cotacao: Cotacao) => Promise<boolean>
  delete: (id: String) => Promise<boolean>
}

export default CotacaoRepository
