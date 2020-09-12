import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

const updateProduto = (
  produtoRepository: ProdutoRepository
) => async (produto: Produto) => {
  const updatedProduto = await produtoRepository.update(produto)
  return updatedProduto
}

export default updateProduto
