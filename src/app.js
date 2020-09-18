import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import productsRoutes from "./routes/products.routes";

const app = express();

app.set("pkg", pkg);

app.use(express.json()); //Para que pueda entender los formatos JSON que llegan al servidor, sin esto no puedo meter datos a la BD

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/products", productsRoutes); //Todas las rutas que vengan de aca, siempre comenzaran con /products

export default app;
