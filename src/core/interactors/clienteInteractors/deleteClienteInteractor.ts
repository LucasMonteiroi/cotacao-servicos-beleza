import ClienteRepository from '../../repositories/clienteRepository'

export default class DeleteClienteInteractor {
  async deleteCliente (clienteRepository: ClienteRepository, idCliente: String): Promise<Boolean> {
    const deletedCliente: Boolean = await clienteRepository.delete(idCliente)
    return deletedCliente
  }
}
