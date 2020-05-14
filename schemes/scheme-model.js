module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .from("steps")
    .join("schemes", "steps.scheme_id", "=", "schemes.id")
    .where("schemes.id", "=", id);
}
