import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

export default class GetAllClienteInteractor {
  async getByIdCliente (clienteRepository: ClienteRepository, idCliente: string): Promise<Cliente> {
    const cliente: Cliente = await clienteRepository.getById(idCliente)
    return cliente
  }
}
