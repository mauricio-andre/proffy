import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classSchedule', (table) => {
    table.increments('id').primary();
    table.integer('weekDay').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('classId')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classSchedule');
}