import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

const createProduto = (
  produtoRepository: ProdutoRepository
) => async (produto: Produto) => {
  const createdProduto: Produto = await produtoRepository.create(produto)
  return createdProduto
}

export default createProduto
