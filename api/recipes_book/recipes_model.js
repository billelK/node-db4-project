const db = require("../../data/db-config")

async function getRecipeById(recipe_id) {
    const result = await db.select("r.recipe_id", "recipe_name", "createdAt")
    .from("recipes as r")
    .where("r.recipe_id", recipe_id)
    .join("steps as s", "r.recipe_id", "s.recipe_id")
    .select("s.step_id","step_number","instructions as step_instructions")
    .leftJoin("recipe_ingredients as ri","ri.step_id", "s.step_id")
    .leftJoin("ingredients as i","i.ingredient_id", "ri.ingredient_id")
    .select("i.ingredient_id", "ingredient_name", "quantity")

    const struct1 = result.reduce((acc, ingredients) => {
        return acc
    },{ "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 })

    const struct = result.reduce((acc, recipe) => {
            acc.steps.push({
                step_id: recipe.step_id,
                step_number: recipe.step_number,
                step_instructions: recipe.step_instructions,
                ingredients: recipe.ingredient_id ? [ {
                    ingredient_id: recipe.ingredient_id,
                    ingredient_name: recipe.ingredient_name,
                    quantity: recipe.quantity
                }] : []
            }) 
        return acc
    },{
        recipe_id: result[0].recipe_id,
        recipe_name: result[0].recipe_name,
        created_at: result[0].createdAt,
        steps: [] })
    
    return struct
}

module.exports = {
    getRecipeById
}

/* 
select 
    r.recipe_id,
    recipe_name,
    createdAt,
    step_id,
    step_number,
    instructions as step_instructions,
    ingredient_id,
    ingredient_name,
    quantity
from recipes as r
join steps as s
    on r.recipe_id = s.recipe_id
left join recipe_ingredients as ri
    on ri.step_id = s.step_id
left join ingredients as i
    on i.ingredient_id = ri.ingredient_id 
    where r.recipe_id = 1 
*/