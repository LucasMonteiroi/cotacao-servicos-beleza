import Cliente from '../entities/cliente'

interface ClienteRepository {
  create: (cliente: Cliente) => Promise<Cliente>
  getById: (id: String) => Promise<Cliente>
  getAll: () => Promise<Cliente[]>
  update: (idCliente: string, cliente: Cliente) => Promise<boolean>
  delete: (id: String) => Promise<boolean>
}

export default ClienteRepository
