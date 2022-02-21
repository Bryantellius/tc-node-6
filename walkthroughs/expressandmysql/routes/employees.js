const express = require("express");
const employees = require("../db/queries/employees");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let { id, startingAt, limit } = req.query;

    if (!id) {
      let results = await employees.getAll(limit, startingAt);
      res.json({
        count: results.length,
        data: results,
        when: new Date().toString(),
      });
    } else {
      let [result] = await employees.getOne(id);
      res.json({ data: result || "No results.", when: new Date().toString() });
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let employee = req.body;
    let { insertId } = await employees.addOne(employee);

    res.json({
      insertId,
      msg: "Successfully added employee!",
      when: new Date().toString(),
    });
  } catch (e) {
    next(e);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    let { id } = req.query;
    if (!id)
      res
        .status(400)
        .json({ msg: "You must provide an 'id' field for this operation." });
    else {
      let result = await employees.removeOne(id);
      res.json({
        msg: `Successfully deleted employee at 'id' = '${id}'`,
        when: new Date().toString(),
      });
    }
  } catch (e) {
    next(e);
  }
});

router.put("/", async (req, res, next) => {
  try {
    let updateValues = req.body;

    if (!updateValues.EmployeeId) {
      res.status(400).json({ msg: "You must provide an 'id' field." });
    } else {
      let result = await employees.updateOne(
        updateValues.EmployeeId,
        updateValues
      );
      res.json({
        msg: `Successfully updated employee at 'id' = '${updateValues.EmployeeId}`,
        when: new Date().toString(),
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
