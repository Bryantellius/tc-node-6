const Query = require("../models");

const getAll = async (limit = 10, offset = 0) => {
  // Set a max limit to 100
  let acceptedLimit = limit > 100 ? 100 : limit;

  return Query("SELECT * FROM Employees LIMIT ? OFFSET ?", [
    parseInt(acceptedLimit),
    parseInt(offset),
  ]);
};

const getOne = async (EmployeeId) => {
  return Query("SELECT * FROM Employees WHERE EmployeeId = ?", [EmployeeId]);
};

const removeOne = async (EmployeeId) => {
  return Query("DELETE FROM Employees WHERE EmployeeId = ?", [EmployeeId]);
};

const updateOne = async (EmployeeId, updatedValues) => {
  return Query("UPDATE Employees SET ? WHERE EmployeeId = ?", [
    updatedValues,
    EmployeeId,
  ]);
};

const addOne = async (employee) => {
  return Query("INSERT INTO Employees SET ?", [employee]);
};

module.exports = {
  removeOne,
  updateOne,
  addOne,
  getAll,
  getOne,
};
