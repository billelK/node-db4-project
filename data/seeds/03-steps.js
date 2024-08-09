/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').truncate()
  await knex('steps').insert([
    {step_number: 1, instructions: 'Peel and core apples', recipe_id: 2},
    {step_number: 2, instructions: 'thinly slice',recipe_id: 2},
    {step_number: 3, instructions: 'Preheat the oven to 425 degrees F', recipe_id: 2},
    {step_number: 1, instructions: 'Whisk together mayonnaise sugar in a serving bowl', recipe_id: 1},
    {step_number: 2, instructions: 'add lemon juice and salt',recipe_id: 1},
    {step_number: 3, instructions: 'Stir in apples', recipe_id: 1},
    {step_number: 1, instructions: 'Saute garlic and onion', recipe_id: 3},
    {step_number: 2, instructions: 'Brown the beef',recipe_id: 3},
    {step_number: 3, instructions: 'Add everything else, give it a good stir then simmer for 20 minutes', recipe_id: 3}
  ]);
};
