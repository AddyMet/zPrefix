exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
      })
      .createTable('items', (table) => {
        table.increments('id').primary();
        table.string('name', 250).notNullable();
        table.text('description', 100).notNullable();
        table.integer('quantity').notNullable();
        table.integer('inventory_tracker_id').unsigned().references('inventory_tracker').onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('inventory_tracker')
      .dropTableIfExists('userinventory_tracker');
  };