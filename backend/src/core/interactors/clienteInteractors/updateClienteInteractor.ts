import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

export default class UpdateClienteInteractor {
  async updateCliente (clienteRepository: ClienteRepository, idCliente: string, cliente: Cliente): Promise<Boolean> {
    const updatedCliente: Boolean = await clienteRepository.update(idCliente, cliente)
    return updatedCliente
  }
}
