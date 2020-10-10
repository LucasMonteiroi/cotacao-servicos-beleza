import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

export default class GetAllProdutoInteractor {
  async getAllProduto (produtoRepository: ProdutoRepository): Promise<Produto[]> {
    const produtos: Produto[] = await produtoRepository.getAll()
    return produtos
  }
}
