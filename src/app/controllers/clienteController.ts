import ClienteInteractors from '../../core/interactors/clienteInteractors'
import { Request, Response } from 'express'

export default class ClienteController {
  async create (request: Request, response: Response): Promise<Response> {
    const { body } = request
    const interactor = new ClienteInteractors()
    const cliente = await interactor.create(body)
    return response.json(cliente)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const { body } = request
    const id = request.params.id
    const interactor = new ClienteInteractors()
    const updated = await interactor.update(id, body)
    return response.json(updated)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const interactor = new ClienteInteractors()
    const deleted = await interactor.delete(id)
    return response.json(deleted)
  }

  async getById (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const interactor = new ClienteInteractors()
    const cliente = await interactor.getById(id)
    return response.json(cliente)
  }

  async getAll (request: Request, response: Response): Promise<Response> {
    const interactor = new ClienteInteractors()
    const clientes = await interactor.getAll()
    return response.json(clientes)
  }
}
