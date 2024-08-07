import { Flight } from "../models/flight.js"

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
    console.log(error);
    res.redirect("/flights/new")
  }
}

async function index(req, res) {
  const flights = await Flight.find({})
res.render("flights/index", {
  title: "All Flights",
  flights
})
}

export {
  newFlight as new,
  create,
  index,
}