import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

export default class CreateClienteInteractor {
  async createCliente (clienteRepository: ClienteRepository, cliente: Cliente): Promise<Cliente> {
    const createdCliente: Cliente = await clienteRepository.create(cliente)
    return createdCliente
  }
}
