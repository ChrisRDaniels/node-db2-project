exports.seed = async function(knex) {
 // Deletes ALL existing entries
 await knex("cars").truncate();
 // Inserts seed entries
 await knex("cars").insert([
  {
   vin: "2T1BR18E5WC056406",
   make: "Subaru",
   model: "Impreza STI",
   mileage: 12000,
   transmission: "Standard",
   title_status: "Clean"
  },
  {
   vin: "JN1CA21DXXT805880",
   make: "Ford",
   model: "Ranger",
   mileage: 95000,
   transmission: "Automatic",
   title_status: "Clean"
  },
  {
   vin: "JH4DB1560LS012302",
   make: "Chevy",
   model: "Camaro",
   mileage: 25000,
   transmission: "Standard",
   title_status: "Salvage"
  }
 ]);
};
