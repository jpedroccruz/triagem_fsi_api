import express, { json } from 'express'
import getUserData from './routes/getUserData.js'
import updateData from './routes/updateData.js'
import continueScreening from './routes/continueScreening.js'
import cors from 'cors'

const app = express()

app.use(json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT']
}))

app.get('/', (_, res) => {
  res.status(200).send({ menssage: "Hello World" })
}) 

app.get('/user/:susCode', getUserData)
app.put('/user', updateData)
app.post('/screening', continueScreening)

app.listen(3333, () => console.log("Server running on port 3333."))