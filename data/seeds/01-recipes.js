/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {recipe_name: 'Waldorf Salad', createdAt: "2006-04-01 17:00:19.120"},
    {recipe_name: 'Apple Pie', createdAt: "2010-11-10 07:00:00.020"},
    {recipe_name: 'Spaghetti Bolognese', createdAt: "2021-04-01 08:23:19.120"}
  ]);
};
