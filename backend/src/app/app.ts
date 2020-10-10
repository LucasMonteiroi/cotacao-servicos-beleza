import express from 'express'
import bodyParser from 'body-parser'
import dotEnv from 'dotenv'
import ClienteController from './controllers/clienteController'
import CotacaoController from './controllers/cotacaoController'
import ProdutoController from './controllers/produtoController'

dotEnv.config()
const PORT = 8080

const app = express()
app.use(bodyParser.json())

app.post('/cliente', new ClienteController().create)
app.put('/cliente/:id', new ClienteController().update)
app.delete('/cliente/:id', new ClienteController().delete)
app.get('/cliente/:id', new ClienteController().getById)
app.get('/cliente', new ClienteController().getAll)

app.post('/cotacao', new CotacaoController().create)
app.put('/cotacao/:id', new CotacaoController().update)
app.delete('/cotacao/:id', new CotacaoController().delete)
app.get('/cotacao/:id', new CotacaoController().getById)
app.get('/cotacao', new CotacaoController().getAll)

app.post('/produto', new ProdutoController().create)
app.put('/produto/:id', new ProdutoController().update)
app.delete('/produto/:id', new ProdutoController().delete)
app.get('/produto/:id', new ProdutoController().getById)
app.get('/produto', new ProdutoController().getAll)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
