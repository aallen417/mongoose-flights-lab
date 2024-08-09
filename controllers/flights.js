import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

async function create(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key]
    }
    const flight = await Flight.create(req.body)
    res.redirect(`/flights`)    
  } catch (error) {
    console.log(error)
    res.redirect(`/meals/${meal._id}`)
  }
}

async function index(req, res) {
 const flights = await Flight.find({})
res.render("flights/index", {
  title: "All Flights", 
  flights
})
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    .populate("meals")
    const meals = await Meal.find({_id: {$nin: flight.meals}})    
    res.render("flights/show", {
      title: "Flight Details",
      flight,
      meals
    })
  } catch (error) {
    console.log(error)
    res.redirect("/flights")
  }
}

async function edit(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    res.render("flights/edit", {
      title: "Edit Flight",
      flight
    })    
  } catch (error) {
    console.log(error)
    res.redirect("/flights")    
  }
}

async function update(req, res) {
  try {
    await Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
    res.redirect(`/flights/${req.params.flightId}`)    
  } catch (error) {
    console.log(error)    
    res.redirect(`/flights/${req.params.flightId}`)
  }
}

async function createTicket(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    flight.tickets.push(req.body)
    await flight.save()
    res.redirect(`/flights/${flight._id}`)    
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function addToMeals(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    flight.meals.push(req.body.mealId)
    await flight.save()
    res.redirect(`/flights/${flight._id}`)
  } catch (error) {
    console.log(error)
    res.redirect("/")
  }
}

export {
  newFlight as new,
  create,
  index,
  show,
  edit,
  update,
  createTicket,
  addToMeals
}