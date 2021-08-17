const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const morgan = require("morgan")
const _ = require("lodash")
// const blogs = require("./blogs")
const blogRoutes = require("./routes/blogRoutes")

// register app
const app = express()

// connect to mongoDB
const dbURI = `${process.env.MONGO_URI}`

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    console.log("connected to mongo database")
    app.listen(3000)
  })
  .catch(err => console.log(err, "err from mongo"))

// regiser view engine
app.set("view engine", "ejs")
// app.set('views', 'exampleFolder') // manually setting the views location

// Middlewares & satic files
app.use(express.static("public"))

//middleware to access view data
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// SANDBOX ROUTES FOR MONGO & MONGOOSE

// SETTING & RENDERING ROUTES //
app.get("/", (req, res) => {
  res.redirect("/blogs")
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About Ninjas" })
})

app.use("/blogs", blogRoutes)

app.use((req, res) => {
  res.status(404).render("404", { title: "Lost to the underworld" })
})
