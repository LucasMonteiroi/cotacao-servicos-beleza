import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

export default class GetAllClienteInteractor {
  async getAllCliente (clienteRepository: ClienteRepository): Promise<Cliente[]> {
    const clientes: Cliente[] = await clienteRepository.getAll()
    return clientes
  }
}
