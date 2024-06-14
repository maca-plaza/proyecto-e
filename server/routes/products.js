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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ productId: id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ error: "not found" });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

export default router;
