import { Router } from "express";
import Search from "../db/models/search.js";
import Product from "../db/models/Product.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { word } = req.query;
    if (word) {
      const regex = new RegExp(word, "i"); // 'i' hace que la búsqueda sea insensible a mayúsculas y minúsculas

      const products = await Product.find({
        $or: [{ name: regex }, { brand: regex }],
      });
      const searches = await Search.find({ keyWords: regex });
      res.send(
        products
          .map((p) => {
            return {
              url: "/producto/" + p.productId,
              name: p.name,
              type: "producto",
              keyWords: "",
            };
          })
          .concat(
            searches.map((s) => {
              return {
                ...s._doc,
                type: "page",
              };
            })
          )
      );
    } else {
      res.status(400).send("parámetro word es requerido");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

export default router;
