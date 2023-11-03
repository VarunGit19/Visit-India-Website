import express from 'express'
import { createTourData } from '../Controllers/tourControllers.js'

const router = express.Router()

router.post('/createdata', createTourData)


export default router