import express from 'express'
import { CourtModel, StateModel } from './db.js'

const router = express.Router()

router.get('/' , async (req, res) => res.send(await CourtModel.find().populate({ path: 'state', select: 'name' })))