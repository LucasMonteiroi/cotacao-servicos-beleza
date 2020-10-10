import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

export default class UpdateProdutoInteractor {
  async updateProduto (produtoRepository: ProdutoRepository, idProduto: string, produto: Produto): Promise<Boolean> {
    const updatedProduto: Boolean = await produtoRepository.update(idProduto, produto)
    return updatedProduto
  }
}
