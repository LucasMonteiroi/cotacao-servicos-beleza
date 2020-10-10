import Cotacao from '../core/entities/cotacao'
import CotacaoRepository from '../core/repositories/cotacaoRepository'
import MongoAdapter from '../adapters/mongodbAdapter'

class CotacaoMongoDatasource implements CotacaoRepository {
  _collection = 'cotacao'

  public async create (cotacao: Cotacao): Promise<Cotacao> {
    const adapter = new MongoAdapter()
    const result = await adapter.post(cotacao, this._collection)
    return result
  }

  public async getAll (): Promise<Cotacao[]> {
    const adapter = new MongoAdapter()
    const cotacaos = await adapter.get(this._collection)
    return cotacaos
  }

  public async update (idCotacao: string, cotacao: Cotacao): Promise<boolean> {
    try {
      const adapter = new MongoAdapter()
      const updated = await adapter.put(idCotacao, cotacao, this._collection)
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

  public async getById (id: string): Promise<Cotacao> {
    const adapter = new MongoAdapter()
    const cotacao: Cotacao = await adapter.get(this._collection, id)
    return cotacao
  }
}

export default CotacaoMongoDatasource
