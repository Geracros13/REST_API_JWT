import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    category: String,
    price: Number,
    imgURL: String,
  },
  {
    timestamps: true, //Para que cada vez que se guarde algo vaya con su fecha de creacion
    versionKey: false, //Para que cada vez que se cree un registro no se cree un __v
  }
);

export default model("Product", productSchema); // "El nombre que le daremos al modelo" y basado en el Shema productSchema
