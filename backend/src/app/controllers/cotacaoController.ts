import CotacaoInteractors from '../../core/interactors/cotacaoInteractors'
import { Request, Response } from 'express'

export default class CotacaoController {
  async create (request: Request, response: Response): Promise<Response> {
    const { body } = request
    const interactor = new CotacaoInteractors()
    const cotacao = await interactor.create(body)
    return response.json(cotacao)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const { body } = request
    const id = request.params.id
    const interactor = new CotacaoInteractors()
    const updated = await interactor.update(id, body)
    return response.json(updated)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const interactor = new CotacaoInteractors()
    const deleted = await interactor.delete(id)
    return response.json(deleted)
  }

  async getById (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const interactor = new CotacaoInteractors()
    const cotacao = await interactor.getById(id)
    return response.json(cotacao)
  }

  async getAll (request: Request, response: Response): Promise<Response> {
    const interactor = new CotacaoInteractors()
    const cotacaos = await interactor.getAll()
    return response.json(cotacaos)
  }
}
