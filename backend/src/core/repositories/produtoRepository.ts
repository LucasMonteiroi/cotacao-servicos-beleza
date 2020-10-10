import Produto from '../entities/produto'

interface ProdutoRepository {
  create: (produto: Produto) => Promise<Produto>
  getById: (id: String) => Promise<Produto>
  getAll: () => Promise<Produto[]>
  update: (idProduto: string, produto: Produto) => Promise<boolean>
  delete: (id: String) => Promise<boolean>
}

export default ProdutoRepository
