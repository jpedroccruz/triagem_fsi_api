import express, { json } from 'express'
import userRoute from './routes/userRoute'
import screeningRoute from './routes/screeningRoute'
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

app.use(userRoute)
app.use(screeningRoute)

app.listen(3333, () => console.log("Server running on port 3333."))