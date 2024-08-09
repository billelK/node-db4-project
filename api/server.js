const express = require("express")
const recipesRouter = require("./recipes_book/recipes_router.js")
const server = express()

server.use(express.json())
server.use("/api/recipes", recipesRouter)

module.exports = server
