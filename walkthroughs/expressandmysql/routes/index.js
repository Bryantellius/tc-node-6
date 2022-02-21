const express = require("express");
const employeeRouter = require("./employees");

const router = express.Router();

router.use("/employees", employeeRouter);
router.get("/test", (req, res, next) => {
  try {
    res.send("PASS");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
