import ProdutoRepository from '../../repositories/produtoRepository'

export default class DeleteProdutoInteractor {
  async deleteProduto (produtoRepository: ProdutoRepository, idProduto: String): Promise<Boolean> {
    const deletedProduto: Boolean = await produtoRepository.delete(idProduto)
    return deletedProduto
  }
}
