import express, { json } from 'express'
import getUserData from './routes/getUserData.js'
import updateData from './routes/continueScreening.js'
import continueScreening from './routes/continueScreening.js'

const app = express()

app.use(json())

app.get('/', (_, res) => {
  res.status(200).send({ menssage: "Hello World" })
}) 

app.get('/user/:susCode', getUserData)
app.put('/user/:susCode', updateData)
app.post('/screening/:susCode', continueScreening)

app.listen(3333, () => console.log("Server running on port 3333."))