exports.seed = function(knex) {
  return knex("users").insert([
    { username: "test1", password: "test" },
    { username: "test2", password: "test" },
    { username: "test3", password: "test" }
  ]);
};
