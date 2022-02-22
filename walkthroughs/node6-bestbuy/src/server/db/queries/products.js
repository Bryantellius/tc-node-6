import query from "../models";

// write parameterized query functions below
const getAll = async (limit = 10, offset = 0, Name) => {
  let qs = `SELECT * FROM products${Name ? " WHERE Name LIKE ? " : " "} LIMIT ? OFFSET ?`;
  let values = [parseInt(limit), parseInt(offset)];

  if (Name) values.unshift(`%${Name}%`);
  
  return query(qs, values);
};

const getOne = async (ProductId) => {
  return query("SELECT * FROM products WHERE ProductId = ?", [ProductId]);
};

const addOne = async (product) => {
  return query("INSERT INTO products SET ?", [product]);
};

const updateOne = async (ProductId, product) => {
  return query("UPDATE products SET ? WHERE ProductId = ?", [
    product,
    ProductId,
  ]);
};

const deleteOne = async (ProductId) => {
  return query("DELETE FROM products WHERE ProductId = ?", [ProductId]);
};

export default { getAll, getOne, addOne, updateOne, deleteOne };
