import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET /flights/new
router.get("/new", flightsCtrl.new)

// GET /flights
router.get("/", flightsCtrl.index)

// POST /movies
router.post('/', flightsCtrl.create)


export { router }
