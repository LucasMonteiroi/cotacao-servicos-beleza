import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

export default class UpdateCotacaoInteractor {
  async updateCotacao (cotacaoRepository: CotacaoRepository, idCotacao: string, cotacao: Cotacao): Promise<Boolean> {
    const updatedCotacao: Boolean = await cotacaoRepository.update(idCotacao, cotacao)
    return updatedCotacao
  }
}
