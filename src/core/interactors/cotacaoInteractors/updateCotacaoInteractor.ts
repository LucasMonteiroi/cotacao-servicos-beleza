import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

export default class UpdateCotacaoInteractor {
  async updateCotacao (cotacaoRepository: CotacaoRepository, cotacao: Cotacao): Promise<Boolean> {
    const updatedCotacao: Boolean = await cotacaoRepository.update(cotacao)
    return updatedCotacao
  }
}
