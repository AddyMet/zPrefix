/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE toy_store CASCADE')
  await knex('toy_store').del()
  await knex('toy_store').insert([
    {id: 1, firstname: 'Amy', lastname: 'Winehouse', username: 'AWinehouse', password: bcrypt.hashSync('DecktheHall$', 10)},
    {id: 2, firstname: 'Cameron', lastname: 'Lopez', username: 'CLopez', password: bcrypt.hashSync('W0nderful-Life', 10)},
    {id: 3, firstname: 'Cynthia', lastname: 'runs', username: 'Cruns', password: bcrypt.hashSync('Flying@ce', 10)}
  ]);
};