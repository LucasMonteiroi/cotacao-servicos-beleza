import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

const createCliente = (
  clienteRepository: ClienteRepository
) => async (cliente: Cliente) => {
  const createdCliente: Cliente = await clienteRepository.create(cliente)
  return createdCliente
}

export default createCliente
