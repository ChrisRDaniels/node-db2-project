exports.up = async function(knex) {
 await knex.schema.createTable("cars", table => {
  table.increments();

  table.string("vin").notNull();
  table.string("make").notNull();
  table.string("model").notNull();
  table.integer("mileage").notNull();
  table.string("transmission");
  table.string("title_status");
 });
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists("cars");
};
