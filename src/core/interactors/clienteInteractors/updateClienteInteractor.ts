import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

const updateCliente = (
  clienteRepository: ClienteRepository
) => async (cliente: Cliente) => {
  const updatedCliente = await clienteRepository.update(cliente)
  return updatedCliente
}

export default updateCliente
