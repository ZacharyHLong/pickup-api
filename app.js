import express from 'express'
import cors from 'cors'
import { CourtModel, StateModel } from './db.js'
import courtRoutes from './routes/court_routes.js'
import gameRoutes from './routes/game_routes.js'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => res.send({ info: 'PickUp'}))

app.get('/states', async (req, res) => res.send(await StateModel.find()))

app.use('/courts', courtRoutes)

app.use('/games', gameRoutes)

export default app