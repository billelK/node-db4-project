/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema

  .createTable("recipes", tbl => {
    tbl.increments("recipe_id")
    tbl.string("recipe_name", 128)
        .unique()
        .notNullable()
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  })

  .createTable("ingredients", tbl => {
    tbl.increments("ingredient_id")
    tbl.string("ingredient_name", 128)
        .unique()
        .notNullable()
  })

  .createTable("steps", tbl => {
    tbl.increments("step_id")
    tbl.integer("steps_number", 128)
    tbl.string("instructions", 128)
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
  })

  .createTable("recipe_ingredients", tbl => {
    tbl.increments("ri_id")
    tbl.integer("quantity")
        .unsigned()
    tbl.integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};
