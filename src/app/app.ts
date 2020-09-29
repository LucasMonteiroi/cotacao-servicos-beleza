import express from 'express'
import bodyParser from 'body-parser'
import dotEnv from 'dotenv'
import ClienteController from './controllers/clienteController'

dotEnv.config()
const PORT = 8080

const app = express()
app.use(bodyParser.json())

app.post('/cliente', new ClienteController().create)
app.put('/cliente/:id', new ClienteController().update)
app.delete('/cliente/:id', new ClienteController().delete)
app.get('/cliente/:id', new ClienteController().getById)
app.get('/cliente', new ClienteController().getAll)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
