import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

export default class GetAllProdutoInteractor {
  async getByIdProduto (produtoRepository: ProdutoRepository, idProduto: String): Promise<Produto> {
    const produto: Produto = await produtoRepository.getById(idProduto)
    return produto
  }
}
