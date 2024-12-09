/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex.schema.raw('TRUNCATE item CASCADE')
    await knex('item').del()
    await knex('item').insert([
      {id: 1, inventory_tracker: 2, name: 'item', description: 'Lorem Ipsum', quantity: 5},
      {id: 2, inventory_tracker: 2, name: 'item', description: 'Lorem Ipsum', quantity: 25},
      {id: 3, inventory_tracker: 1, name: 'item', description: 'Lorem Ipsum.', quantity: 30},
    ]);
  };