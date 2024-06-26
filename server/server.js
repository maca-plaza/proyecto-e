import express, { json } from "express";
import { connect, set } from "mongoose";
import productRouter from "./routes/products.js";
import contactRouter from "./routes/contact.js";
import searchRouter from "./routes/search.js";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import userRouter from "./routes/user.js";
import wishlistRouter from './routes/wishlist.js';


dotenvConfig();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const PORT = "4200";

connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@energizatech.iepoih0.mongodb.net/energizatech`
)
  .then(() => {
    console.log("Conectado a la base de datos MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos", err);
  });
set("debug", true);

const app = express();
app.use(json());
app.use(express.json());
app.use(cors());

//rutas
app.use("/products", productRouter);
app.use("/search", searchRouter);
app.use("/contact", contactRouter);
app.use("/users", userRouter);
app.use("/wishlist", wishlistRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
