import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

export default class GetAllCotacaoInteractor {
  async getByIdCotacao (cotacaoRepository: CotacaoRepository, idCotacao: String): Promise<Cotacao> {
    const cotacao: Cotacao = await cotacaoRepository.getById(idCotacao)
    return cotacao
  }
}
