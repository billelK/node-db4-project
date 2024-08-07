/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {ingredient_name: 'apples',quantity: 6},
    {ingredient_name: 'butter',quantity: 1/3 },
    {ingredient_name: 'flour',quantity: 1/2},
    {ingredient_name: 'mayonnaise',quantity: 1},
    {ingredient_name: 'sugar',quantity: 1/3 },
    {ingredient_name: 'lemon juice',quantity: 1/2},
    {ingredient_name: 'teaspoon salt',quantity: 1/2},
    {ingredient_name: 'Worcestershire sauce',quantity: 1 },
    {ingredient_name: 'Beef bouillon cubes',quantity: 1}
  ]);
};
