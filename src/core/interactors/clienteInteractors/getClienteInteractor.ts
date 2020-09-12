import ClienteRepository from '../../repositories/clienteRepository'
import Cliente from '../../entities/cliente'

const getByIdCliente = (
  clienteRepository: ClienteRepository
) => async (idCliente: string) => {
  const cliente: Cliente = await clienteRepository.getById(idCliente)
  return cliente
}

export default getByIdCliente
