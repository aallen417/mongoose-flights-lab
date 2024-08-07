import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET /flights/new
router.get("/new", flightsCtrl.new)

// GET /flights
router.get("/", flightsCtrl.index)

// GET /flights/:flightId
router.get("/:flightId", flightsCtrl.show)

// GET /flights/:flightId/edit
router.get("/:flightId/edit", flightsCtrl.edit)

// POST /movies
router.post('/', flightsCtrl.create)

// POST /movies/:movieId/review
router.post("/:flightId/tickets", flightsCtrl.createTicket)

//PUT /flights/:flightId
router.put("/:flightId", flightsCtrl.update)

export { router }
