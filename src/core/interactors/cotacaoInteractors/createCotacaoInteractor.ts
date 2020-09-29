import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

export default class CreateCotacaoInteractor {
  async createCotacao (cotacaoRepository: CotacaoRepository, cotacao: Cotacao): Promise<Cotacao> {
    const createdCotacao: Cotacao = await cotacaoRepository.create(cotacao)
    return createdCotacao
  }
}
