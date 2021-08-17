const mongoose = require("mongoose")
const Schema = mongoose.Schema

// SCHEMA
const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
)

// MODEL
const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog
