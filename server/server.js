import express, { json } from "express";
import { connect } from "mongoose";
import productRouter from "./routes/products.js";
import contactRouter from "./routes/contact.js";
import searchRouter from "./routes/search.js";
import cors from "cors";

const PORT = "4200";

connect("mongodb+srv://macaplazasm:Qx9yToHD18tqQNxh@energizatech.iepoih0.mongodb.net/energizatech")
  .then(() => {
    console.log("Conectado a la base de datos MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos", err);
  });

const app = express();
app.use(json());
app.use(cors());

//rutas
app.use("/products", productRouter);
app.use("/search", searchRouter);
app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
