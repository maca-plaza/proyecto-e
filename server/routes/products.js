import { Router } from "express";
import Product from "../db/models/Product.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const query = {};

    const { brand } = req.query;

    if (brand) {
      query.brand = brand;
    }

    console.log("get products");
    res.send(await Product.find(query));
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.delete("/:id", function(req, res) {
  
});

export default router;
