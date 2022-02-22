import query from "../models";

// write parameterized query functions below
function getAll() {
  return query("SELECT * FROM table");
}

export { /* export query functions here */ getAll };
