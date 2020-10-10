import Produto from '../core/entities/produto'
import ProdutoRepository from '../core/repositories/produtoRepository'
import MongoAdapter from '../adapters/mongodbAdapter'

class ProdutoMongoDatasource implements ProdutoRepository {
  _collection = 'produto'

  public async create (produto: Produto): Promise<Produto> {
    const adapter = new MongoAdapter()
    const result = await adapter.post(produto, this._collection)
    return result
  }

  public async getAll (): Promise<Produto[]> {
    const adapter = new MongoAdapter()
    const produtos = await adapter.get(this._collection)
    return produtos
  }

  public async update (idProduto: string, produto: Produto): Promise<boolean> {
    try {
      const adapter = new MongoAdapter()
      const updated = await adapter.put(idProduto, produto, this._collection)
      return updated
    } catch (err) {
      console.error(err)
      return false
    }
  }

  public async delete (id: string): Promise<boolean> {
    const adapter = new MongoAdapter()
    const deleted = adapter.delete(id, this._collection)
    return deleted
  }

  public async getById (id: string): Promise<Produto> {
    const adapter = new MongoAdapter()
    const produto: Produto = await adapter.get(this._collection, id)
    return produto
  }
}

export default ProdutoMongoDatasource
