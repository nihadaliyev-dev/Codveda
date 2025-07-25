const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./src/config/db");
const productRouter = require("./src/routes/productRouter");
const coursesRouter = require("./src/routes/coursesRouter");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/courses", coursesRouter);

const PORT = process.env.DB_PORT || 1000;

app.listen(PORT, () => {
  console.log(
    `Example app listening on port ${PORT}, http://localhost:${PORT}`
  );
});

connectDB();
