import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema ({
  seat: String,
  price: Number
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]
  },
  airport: {
    type: String,
    emum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date
  },
  tickets: [
    ticketSchema
  ],
  meals: [Schema.Types.ObjectId]
})
const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}