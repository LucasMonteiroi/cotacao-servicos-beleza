import Cliente from '../entities/cliente'

interface ClienteRepository {
  create: (cliente: Cliente) => Promise<Cliente>
  getById: (id: string) => Promise<Cliente>
  getAll: () => Promise<Cliente[]>
  update: (cliente: Cliente) => Promise<boolean>
  delete: (id: string) => Promise<boolean>
}

export default ClienteRepository
