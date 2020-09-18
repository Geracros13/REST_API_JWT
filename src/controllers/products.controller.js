import Product from "../models/Product";

//Funciones que operan con mi BD (Controladores)
export const createProduct = (req, res) => {
  console.log(req.body);
  res.json("Crear producto");
};

export const getProduct = (req, res) => {
  res.json("Get products!");
};
export const getProductById = (req, res) => {
  res.json("Get products por id!");
};
export const updateProductById = (req, res) => {
  res.json("Update product!");
};

export const deleteProductById = (req, res) => {
  res.json("Delete product!");
};
