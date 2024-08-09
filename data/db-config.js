const knex = require("knex")
const configs = require("../knexfile")
const environement = process.env.NODE_ENV || "development"

module.exports = knex(configs[environement])

