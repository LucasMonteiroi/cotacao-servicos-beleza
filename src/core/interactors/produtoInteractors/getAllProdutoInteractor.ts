import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

const getAllProduto = (
  produtoRepository: ProdutoRepository
) => async () => {
  const produtos: Produto[] = await produtoRepository.getAll()
  return produtos
}

export default getAllProduto
