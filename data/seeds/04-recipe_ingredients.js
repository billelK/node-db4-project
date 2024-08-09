/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe_ingredients').truncate()
  await knex('recipe_ingredients').insert([
    {step_id: 1, ingredient_id: 1, quantity: 6},
    {step_id: 2, ingredient_id: 1, quantity: 6},
    {step_id: 4, ingredient_id: 4, quantity: 1},
    {step_id: 5, ingredient_id: 6, quantity: 1},
    {step_id: 6, ingredient_id: 1, quantity: 3},
    {step_id: 7, ingredient_id: 11, quantity: 1},
    {step_id: 7, ingredient_id: 12, quantity: 3},
    {step_id: 8, ingredient_id: 9, quantity: 1},
  ]);
};
