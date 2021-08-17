const Blog = require("../models/blog")

// Get all blogs
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(data => {
      res.render("blogs/index", { title: "Blogs of Ninjas", blogs: data })
    })
    .catch(err => console.log(err, "All blogs err"))
}
// Details for single blog details
const blog_details = (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then(data =>
      res.render("blogs/blog", { blog: data, title: "Ninja Blog details" })
    )
    .catch(err =>
      res.status(404).render("404", { title: "Lost to the underworld" })
    )
}
// Get view form for new blog
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "New Ninja Post" })
}
// Create new blog
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then(data => res.redirect("/blogs"))
    .catch(err => console.log(err, "blog add err"))
}
// Delete a blog
const blog_delete = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then(data => res.json({ redirect: "/blogs" }))
    .catch(err => console.log(err, "err deleting blog"))
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
}
