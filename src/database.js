import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Si la BD con ese nombre no existe se creara en automatico
  .then((db) => console.log("¡Database is connected!")) //Cuando se conecte la BD
  .catch((error) => console.log(error)); //Si hay un error que lo imprima en consola
