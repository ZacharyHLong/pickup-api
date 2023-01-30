import express from 'express'
import cors from 'cors'
import { CourtModel, StateModel } from './db.js'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => res.send({ info: 'PickUp'}))

// test routes, replace later
app.get('/courts', async (req, res) => res.send(await CourtModel.find()))

// get
app.get('/courts/:id', async (req, res) => {
    try {
        const court = await CourtModel.findById(req.params.id)
        if (court) {
            res.send(court)
        } else {
            res.status(404).send({ error: 'Court not found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

// post
app.post('/courts', async (req, res) => {
    const { address, city, state, description } = req.body
    const newCourt = { address, city, state, description }

    try {
        const court = await CourtModel.create(newCourt)
        res.send(court)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})


// put
app.put('/courts/:id', async (req, res) => {
    const { address, city, state, description } = req.body
    const newCourt = { address, city, state, description }

    try {
        const court = await CourtModel.findByIdAndUpdate(req.params.id, newCourt, { returnDocument: 'after' })
        if (court) {
            res.send(court)
        } else {
            res.status(404).send({ error: 'Court not found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

//delete
app.delete('/courts/:id', async (req, res) => {
    try {
        const court = await CourtModel.findByIdAndDelete(req.params.id)
        if (court) {
            res.sendStatus(204)
        } else {
            res.status(404).send({ error: 'Court not found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

app.get('/states', async (req, res) => res.send(await StateModel.find()))


export default app