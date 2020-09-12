import Produto from '../entities/produto'

interface ProdutoRepository {
  create: (produto: Produto) => Promise<Produto>
  getById: (id: string) => Promise<Produto>
  getAll: () => Promise<Produto[]>
  update: (produto: Produto) => Promise<boolean>
  delete: (id: string) => Promise<boolean>
}

export default ProdutoRepository
