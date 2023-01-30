import express from 'express'
import { CourtModel } from '../db.js'

const router = express.Router()

// test routes, replace later
router.get('/', async (req, res) => res.send(await CourtModel.find().populate({ path: 'state', select: 'name' })))

// get
router.get('/:id', async (req, res) => {
    try {
        const court = await CourtModel.findById(req.params.id).populate({ path: 'state', select: 'name' })
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
router.post('/', async (req, res) => {
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
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

export default router