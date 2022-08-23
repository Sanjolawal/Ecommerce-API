const express = require(`express`);
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require(`./middlewares`);

router.route(`/api/products`).get(getAllProducts);
router
  .route(`/api/:singleProduct`)
  .get(getSingleProduct)
  .put(updateSingleProduct)
  .delete(deleteSingleProduct);

module.exports = { router };
