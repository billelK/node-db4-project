const server = require("./api/server")

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Api listening on port ${PORT}`)
})