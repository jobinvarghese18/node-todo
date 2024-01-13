const express = require("express");
const userRoutes = require("./routes/user");
const connectDB = require("./config/DBConfig");
const app = express();

app.use(express.json());
connectDB();
app.listen(8000, () => {
  console.log(`Listening to port 8000`);
});

app.get("/", (req, res) => {
  res.send({ message: "Hello world!" });
});

app.use("/user", userRoutes);
