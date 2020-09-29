import CreateCotacaoInteractor from './createCotacaoInteractor'
import GetAllCotacaoInteractor from './getAllCotacaoInteractor'
import GetByIdCotacaoInteractor from './getByIdCotacaoInteractor'
import UpdateCotacaoInteractor from './updateCotacaoInteractor'
import DeleteCotacaoInteractor from './deleteCotacaoInteractor'
import CotacaoMongoDatasource from '../../../dataSources/cotacaoMongoDatasource'
import Cotacao from '@/core/entities/cotacao'

class CotacaoInteractors {
  async getAll (): Promise<Cotacao[]> {
    const repository = new CotacaoMongoDatasource()
    const interactor = new GetAllCotacaoInteractor()
    return await interactor.getAllCotacao(repository)
  }

  async getById (idCotacao: String): Promise<Cotacao> {
    const repository = new CotacaoMongoDatasource()
    const interactor = new GetByIdCotacaoInteractor()
    return await interactor.getByIdCotacao(repository, idCotacao)
  }

  async create (cotacao: Cotacao): Promise<Cotacao> {
    const repository = new CotacaoMongoDatasource()
    const interactor = new CreateCotacaoInteractor()
    return await interactor.createCotacao(repository, cotacao)
  }

  async update (cotacao: Cotacao): Promise<Boolean> {
    const repository = new CotacaoMongoDatasource()
    const interactor = new UpdateCotacaoInteractor()
    return await interactor.updateCotacao(repository, cotacao)
  }

  async delete (idCotacao: String): Promise<Boolean> {
    const repository = new CotacaoMongoDatasource()
    const interactor = new DeleteCotacaoInteractor()
    return await interactor.deleteCotacao(repository, idCotacao)
  }
}

module.exports = new CotacaoInteractors()
