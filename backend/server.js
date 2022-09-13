import express from "express";
import data from "./data.js";

const app = express();

//for Products
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//for slider
app.get("/api/slider", (req, res) => {
  res.send(data.sliderItems);
});

//for category
app.get("/api/category", (req, res) => {
  res.send(data.category);
});

//for product
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.send(404).send({ message: "Product not Found" });
  }
  // res.send(data.category);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
