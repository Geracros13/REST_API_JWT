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
  //1.1 Buscamos todos los productos
  const allProducts = await Product.find();
  res.json(allProducts);
};

export const getProductById = async (req, res) => {
  //1.1 Buscar producto por ID
  const productFound = await Product.findById(req.params.productId);
  //Devolver el estado 200 junto con el producto encontrado
  res.status(200).json(productFound);
};

export const updateProductById = async (req, res) => {
  //Encontrar producto por su Id y actualizarlo
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      //Para que me devuelva los datos nuevos actualizados
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  //Buscar un producto por su Id y borrarlo, luego devolver un status 204
  await Product.findByIdAndDelete(req.params.productId);
  res.status(204).json();
};
