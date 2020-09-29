import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

export default class GetAllCotacaoInteractor {
  async getAllCotacao (cotacaoRepository: CotacaoRepository): Promise<Cotacao[]> {
    const cotacoes: Cotacao[] = await cotacaoRepository.getAll()
    return cotacoes
  }
}
