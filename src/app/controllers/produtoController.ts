import ProdutoInteractors from '../../core/interactors/produtoInteractors'
import { Request, Response } from 'express'

export default class ProdutoController {
  async create (request: Request, response: Response): Promise<Response> {
    const { body } = request
    const interactor = new ProdutoInteractors()
    const produto = await interactor.create(body)
    return response.json(produto)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const { body } = request
    const id = request.params.id
    const interactor = new ProdutoInteractors()
    const updated = await interactor.update(id, body)
    return response.json(updated)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const interactor = new ProdutoInteractors()
    const deleted = await interactor.delete(id)
    return response.json(deleted)
  }

  async getById (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const interactor = new ProdutoInteractors()
    const produto = await interactor.getById(id)
    return response.json(produto)
  }

  async getAll (request: Request, response: Response): Promise<Response> {
    const interactor = new ProdutoInteractors()
    const produtos = await interactor.getAll()
    return response.json(produtos)
  }
}
