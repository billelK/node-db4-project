/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {ingredient_name: 'apples'},
    {ingredient_name: 'butter' },
    {ingredient_name: 'flour'},
    {ingredient_name: 'mayonnaise'},
    {ingredient_name: 'sugar' },
    {ingredient_name: 'lemon juice'},
    {ingredient_name: 'teaspoon salt'},
    {ingredient_name: 'Worcestershire sauce'},
    {ingredient_name: 'Beef bouillon cubes'},
    {ingredient_name: 'salt'},
    {ingredient_name: 'gaarlic'},
    {ingredient_name: 'onion'}
  ]);
};
