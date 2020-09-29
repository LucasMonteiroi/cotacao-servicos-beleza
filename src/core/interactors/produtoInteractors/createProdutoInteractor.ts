import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

export default class CreateProdutoInteractor {
  async createProduto (produtoRepository: ProdutoRepository, produto: Produto): Promise<Produto> {
    const createdProduto: Produto = await produtoRepository.create(produto)
    return createdProduto
  }
}
