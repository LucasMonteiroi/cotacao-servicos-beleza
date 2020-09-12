import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

const createCotacao = (
  cotacaoRepository: CotacaoRepository
) => async (cotacao: Cotacao) => {
  const createdCotacao: Cotacao = await cotacaoRepository.create(cotacao)
  return createdCotacao
}

export default createCotacao
