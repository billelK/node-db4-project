const express = require("express")
// const {checkID} = require("./recipes_middleware")
const model = require("./recipes_model")
const router = express.Router()



router.get("/:recipe_id", async (req,res,next) => {
    const {recipe_id} = req.params
     result = await model.getRecipeById(recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})

router.use((err, req,res,next) => {
    res.status(err.status || 500)
    .json({
        message: err.message
    })
})

module.exports = router