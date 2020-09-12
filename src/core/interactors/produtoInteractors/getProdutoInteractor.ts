import ProdutoRepository from '../../repositories/produtoRepository'
import Produto from '../../entities/produto'

const getByIdProduto = (
  produtoRepository: ProdutoRepository
) => async (idProduto: string) => {
  const produto: Produto = await produtoRepository.getById(idProduto)
  return produto
}

export default getByIdProduto
