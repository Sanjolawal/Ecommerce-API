const products = require(`../products.json`);
const { collectionInstance } = require(`../mainServer`);

// middleware function for getting all products data

const getAllProducts = async (req, res) => {
  console.log(req.query);
  const productsList = await collectionInstance.find(req.query);
  res.send(productsList);
};

// middleware function for getting a single product data

const getSingleProduct = async (req, res) => {
  const { singleProduct } = req.params;
  const singleP = await collectionInstance.findById(singleProduct);
  res.send(singleP);
};

// middleware function for updating a single product data

const updateSingleProduct = async (req, res) => {
  const { singleProduct } = req.params;
  const updatedP = await collectionInstance.findByIdAndUpdate(singleProduct, {
    name: `pulled`,
    company: `teestin`,
  });
  res.send(`Product Updated`);
};

// middleware function for deleting a single product data

const deleteSingleProduct = async (req, res) => {
  const { singleProduct } = req.params;
  await collectionInstance.findByIdAndDelete(singleProduct);
  res.send(`Product deleted`);
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
