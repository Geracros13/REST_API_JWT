import Product from "../models/Product";

//Funciones que operan con mi BD (Controladores)
export const createProduct = async (req, res) => {
  //1.1 Desestructuro el modelo
  const { name, category, price, imgURL } = req.body;
  //1.2 Mando a llamar el modelo de mi Schema paara crear un producto
  const toCreateProduct = new Product({ name, category, price, imgURL });
  //1.3 Para que el producto a crear se guarde en la BD (Como tarda en crear un producto es un proceso asincrono)
  const productSaved = await toCreateProduct.save();
  //1.4 Creamos un codigo de estado (201 que especifica que un recurso se creo)
  res.status(201).json(productSaved);
};

export const getProduct = async (req, res) => {
  const allProducts = await Product.find();
  res.json(allProducts);
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
