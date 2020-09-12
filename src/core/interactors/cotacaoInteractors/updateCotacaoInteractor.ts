import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

const updateCotacao = (
  cotacaoRepository: CotacaoRepository
) => async (cotacao: Cotacao) => {
  const updatedCotacao = await cotacaoRepository.update(cotacao)
  return updatedCotacao
}

export default updateCotacao
