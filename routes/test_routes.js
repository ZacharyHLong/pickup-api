import express from 'express'
import { CourtModel, StateModel } from '../db.js'

const router = express.Router()

router.get('/' , async (req, res) => res.send(await CourtModel.find().populate({ path: 'court', select: 'address' })))

router.get('/courts', async (req, res) => {
    try {
      const filter = {}  
      const courts = await CourtModel.find(filter).populate({ path: 'state', select: 'name' })
      if (courts) {
        res.send(courts)
      } else {
        res.status(404).send({ error: 'No courts found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
  })




export default router