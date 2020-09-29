import CotacaoRepository from '../../repositories/cotacaoRepository'

export default class DeleteCotacaoInteractor {
  async deleteCotacao (cotacaoRepository: CotacaoRepository, idCotacao: String): Promise<Boolean> {
    const deletedCotacao: Boolean = await cotacaoRepository.delete(idCotacao)
    return deletedCotacao
  }
}
