import CreateClienteInteractor from './createClienteInteractor'
import GetAllClienteInteractor from './getAllClienteInteractor'
import GetByIdClienteInteractor from './getByIdClienteInteractor'
import UpdateClienteInteractor from './updateClienteInteractor'
import DeleteClienteInteractor from './deleteClienteInteractor'
import ClienteMongoDatasource from '../../../dataSources/clienteMongoDatasource'
import Cliente from '@/core/entities/cliente'

export default class ClienteInteractors {
  async getAll (): Promise<Cliente[]> {
    const repository = new ClienteMongoDatasource()
    const interactor = new GetAllClienteInteractor()
    return await interactor.getAllCliente(repository)
  }

  async getById (idCliente: string): Promise<Cliente> {
    const repository = new ClienteMongoDatasource()
    const interactor = new GetByIdClienteInteractor()
    return await interactor.getByIdCliente(repository, idCliente)
  }

  async create (cliente: Cliente): Promise<Cliente> {
    const repository = new ClienteMongoDatasource()
    const interactor = new CreateClienteInteractor()
    return await interactor.createCliente(repository, cliente)
  }

  async update (idCliente: string, cliente: Cliente): Promise<Boolean> {
    const repository = new ClienteMongoDatasource()
    const interactor = new UpdateClienteInteractor()
    return await interactor.updateCliente(repository, idCliente, cliente)
  }

  async delete (idCliente: String): Promise<Boolean> {
    const repository = new ClienteMongoDatasource()
    const interactor = new DeleteClienteInteractor()
    return await interactor.deleteCliente(repository, idCliente)
  }
}
