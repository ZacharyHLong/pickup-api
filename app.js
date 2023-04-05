import express from 'express'
import cors from 'cors'
import courtRoutes from './routes/court_routes.js'
import gameRoutes from './routes/game_routes.js'

const app = express()

app.use(cors({
 origin: '*'
}))

app.use(express.json())

app.get('/', (req, res) => res.send({ info: 'PickUp'}))

app.use('/courts', courtRoutes)

app.use('/games', gameRoutes)

export default app