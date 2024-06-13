import express, { json } from "express";
import { connect } from "mongoose";
import productRouter from "./routes/products.js";
import searchRouter from "./routes/search.js";


const PORT = "4200";

connect("mongodb://localhost:27017/energizatech")
  .then(() => {
    console.log("Conectado a la base de datos MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos", err);
  });

const app = express();
app.use(json());

//rutas
app.use("/products", productRouter);
app.use("/search", searchRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
