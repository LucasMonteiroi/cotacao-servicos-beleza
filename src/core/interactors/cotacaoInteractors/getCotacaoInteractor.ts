import CotacaoRepository from '../../repositories/cotacaoRepository'
import Cotacao from '../../entities/cotacao'

const getByIdCotacao = (
  cotacaoRepository: CotacaoRepository
) => async (idCotacao: string) => {
  const cotacao: Cotacao = await cotacaoRepository.getById(idCotacao)
  return cotacao
}

export default getByIdCotacao
