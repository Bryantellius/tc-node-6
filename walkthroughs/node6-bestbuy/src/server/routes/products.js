import express from "express";
import products from "../db/queries/products";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let { id, limit, startingAt, Name } = req.query;

    if (id) {
      let results = await products.getOne(parseInt(id));
      res.json({ data: results[0] || "No results", count: results.length });
    } else {
      let results = await products.getAll(limit, startingAt, Name);
      res.json({
        data: results,
        count: results.length,
        startingAt: parseInt(startingAt) || 0,
      });
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newProduct = req.body;
    let { insertId } = await products.addOne(newProduct);
    res.json({ insertId, msg: `Successfully added new product!` });
  } catch (e) {
    next(e);
  }
});

router.put("/", async (req, res, next) => {
  try {
    let updatedProduct = req.body;

    if (!updatedProduct.ProductId) {
      res.status(400).json({
        msg: `You must provide a 'ProductId' field for updated products.`,
      });
    } else {
      let { affectedRows } = await products.updateOne(
        updatedProduct.ProductId,
        updatedProduct
      );
      res.json({
        affectedRows,
        msg: `Updated the product at '${updatedProduct.ProductId}'`,
      });
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    let { id } = req.query;

    if (id) {
      let { affectedRows } = await products.deleteOne(id);
      res.json({ affectedRows, msg: `Deleted the product at '${id}'` });
    } else {
      res.status(400).json({
        msg: `You must provide an 'id' query parameter for deleted product.`,
      });
    }
  } catch (e) {
    next(e);
  }
});

export default router;
