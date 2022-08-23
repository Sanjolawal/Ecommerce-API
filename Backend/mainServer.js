const express = require(`express`);
const app = express();
const path = require(`path`);
const mongoose = require(`mongoose`);
require("dotenv").config({
  path: path.resolve(__dirname, `./.env`),
});
let url = process.env.URI;

app.listen(3000, console.log(`server is running and listening`));

// Connecting fApp to Mongodb database

const connecting = async () => {
  try {
    const mongooseConnect = await mongoose.connect(url);
    const mySchema = mongoose.Schema({
      featured: Boolean,
      rating: Number,
      createdAt: {
        type: Date,
        default: Date.now(),
      },

      name: {
        type: String,
        required: [true, `product name is needed`],
      },
      price: {
        type: Number,
        required: [true, `product number is needed`],
      },
      company: String,
    });

    const collectionInstance = mongooseConnect.model(`product`, mySchema);
    console.log(collectionInstance);
    module.exports = { collectionInstance };
    const { router } = require(`./controllers/routes`);
    app.use(router);
  } catch (error) {
    console.log(error);
  }
};
connecting();
