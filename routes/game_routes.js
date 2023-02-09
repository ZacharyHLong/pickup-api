import express from 'express'
import { GameModel } from '../db.js'

const router = express.Router()

// gets all games
router.get('/', async (req, res) => res.send(await GameModel.find()))

// gets single game from its game id
router.get('/:id', async (req, res) => {
    try {
        const game = await GameModel.findById(req.params.id)
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
    try {
    const { title, address, city, state, time, date, skillLevel, description } = req.body
    const newGame = { title, address, city, state, time, date, skillLevel, description }
    const insertedGame = await GameModel.create(newGame)
    res.status(201).send(insertedGame)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})


// put
router.put('/:id', async (req, res) => {
    const { title, address, state, time, date, skillLevel, description, participants } = req.body
    const newGame = { title, address, state, time, date, skillLevel, description, participants }

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