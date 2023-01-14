import Express, { application } from "express";
import mongoose from "mongoose";
// import products from "./Product";
import products from "./Product.js";
import Cors from "cors";

// APP CONFIG
const app = Express();
const port = process.env.PORT || 9001;
const connection_url =
  "mongodb+srv://mohammedavez:e9jNRsH2WCpceLp@cluster0.dwtwerj.mongodb.net/?retryWrites=true&w=majority";

app.use(Express.json());
app.use(Cors());

mongoose.set("strictQuery", false);
mongoose.connect(
  connection_url,
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/product/details", (req, res) => {
  const dbProduct = req.body;
  products.create(dbProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/product/details", (req, res) => {
  products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`listening on localhost:${port}`));
