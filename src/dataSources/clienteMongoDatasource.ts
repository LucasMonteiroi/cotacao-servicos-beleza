import Cliente from '../core/entities/cliente'
import ClienteRepository from '../core/repositories/clienteRepository'
import MongoAdapter from '../adapters/mongodbAdapter'

class ClienteMongoDatasource implements ClienteRepository {
  _collection = 'cliente'

  public async create (cliente: Cliente): Promise<Cliente> {
    const adapter = new MongoAdapter()
    const result = await adapter.post(cliente, this._collection)
    return result
  }

  public async getAll (): Promise<Cliente[]> {
    const adapter = new MongoAdapter()
    const clientes = await adapter.get(this._collection)
    return clientes
  }

  public async update (idCliente: string, cliente: Cliente): Promise<boolean> {
    try {
      const adapter = new MongoAdapter()
      const updated = await adapter.put(idCliente, cliente, this._collection)
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

  public async getById (id: string): Promise<Cliente> {
    const adapter = new MongoAdapter()
    const cliente: Cliente = await adapter.get(this._collection, id)
    return cliente
  }
}

export default ClienteMongoDatasource
