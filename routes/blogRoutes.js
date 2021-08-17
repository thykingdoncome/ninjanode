const express = require("express")
const Blog = require("../models/blog")
const blogController = require("../controllers/blogController")

const router = express.Router()

router.get("/", blogController.blog_index)

router.post("/", blogController.blog_create_post)

router.get("/create", blogController.blog_create_get)

// View simgle blog
router.get("/:id", blogController.blog_details)

// Delete simgle blog
router.delete("/:id", blogController.blog_delete)

module.exports = router
