import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

const getAllCotacao = (
  cotacaoRepository: CotacaoRepository
) => async () => {
  const cotacaos: Cotacao[] = await cotacaoRepository.getAll()
  return cotacaos
}

export default getAllCotacao
