import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

const getAllCliente = (
  clienteRepository: ClienteRepository
) => async () => {
  const clientes: Cliente[] = await clienteRepository.getAll()
  return clientes
}

export default getAllCliente
