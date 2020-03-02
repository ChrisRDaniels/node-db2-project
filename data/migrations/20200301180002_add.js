exports.up = async function(knex) {
 await knex.schema.alterTable("cars", table => {
  table.integer("year");
 });
};

exports.down = async function(knex) {
 await knex.schema.alterTable("cars", table => {
  table.dropColumn("year");
 });
};
