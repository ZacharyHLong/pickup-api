import express from 'express'
import { GameModel } from '../db.js'

const router = express.Router()

// gets all games
router.get('/', async (req, res) => res.send(await GameModel.find().populate({ path: 'state', select: 'name' })))

// gets single game from its game id
router.get('/:id', async (req, res) => {
    try {
        const game = await GameModel.findById(req.params.id).populate({ path: 'state', select: 'name' })
        if (game) {
            res.send(game)
        } else {
            res.status(404).send({ error: 'Game not found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

// posts a single game
router.post('/', async (req, res) => {
    const { address, state, time, date, skillLevel, description } = req.body
    const newGame = { address, state, time, date, skillLevel, description }

    try {
        const game = await GameModel.create(newGame)
        res.send(game)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})


// put
router.put('/:id', async (req, res) => {
    const { address, state, time, date, skillLevel, description } = req.body
    const newGame = { address, state, time, date, skillLevel, description }

    try {
        game = await GameModel.findByIdAndUpdate(req.params.id, newGame, { returnDocument: 'after' })
        if (game) {
            res.send(game)
        } else {
            res.status(404).send({ error: 'Game not found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        const game = await GameModel.findByIdAndDelete(req.params.id)
        if (game) {
            res.sendStatus(204)
        } else {
            res.status(404).send({ error: 'Game not found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

export default router