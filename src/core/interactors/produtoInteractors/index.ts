import CreateProdutoInteractor from './createProdutoInteractor'
import GetAllProdutoInteractor from './getAllProdutoInteractor'
import GetByIdProdutoInteractor from './getByIdProdutoInteractor'
import UpdateProdutoInteractor from './updateProdutoInteractor'
import DeleteProdutoInteractor from './deleteProdutoInteractor'
import ProdutoMongoDatasource from '../../../dataSources/produtoMongoDatasource'
import Produto from '@/core/entities/produto'

class ProdutoInteractors {
  async getAll (): Promise<Produto[]> {
    const repository = new ProdutoMongoDatasource()
    const interactor = new GetAllProdutoInteractor()
    return await interactor.getAllProduto(repository)
  }

  async getById (idProduto: String): Promise<Produto> {
    const repository = new ProdutoMongoDatasource()
    const interactor = new GetByIdProdutoInteractor()
    return await interactor.getByIdProduto(repository, idProduto)
  }

  async create (produto: Produto): Promise<Produto> {
    const repository = new ProdutoMongoDatasource()
    const interactor = new CreateProdutoInteractor()
    return await interactor.createProduto(repository, produto)
  }

  async update (produto: Produto): Promise<Boolean> {
    const repository = new ProdutoMongoDatasource()
    const interactor = new UpdateProdutoInteractor()
    return await interactor.updateProduto(repository, produto)
  }

  async delete (idProduto: String): Promise<Boolean> {
    const repository = new ProdutoMongoDatasource()
    const interactor = new DeleteProdutoInteractor()
    return await interactor.deleteProduto(repository, idProduto)
  }
}

module.exports = new ProdutoInteractors()
