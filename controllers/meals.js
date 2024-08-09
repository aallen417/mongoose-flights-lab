import { Meal } from "../models/meal.js";

async function newMeal(req, res) {
  try {
    const meals = await Meal.find({})
  res.render("meals/new", {
    title: "Add Meal",
    meals
  })
    
  } catch (error) {
    console.log(error)
    res.redirect("/flights")
  }
}

export {
  newMeal as new
}