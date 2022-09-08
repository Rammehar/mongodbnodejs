const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
mongoose.connect(
  "mongodb+srv://admin_skillrisers:L6U9GJeOgxtMUeK1@cluster0.ipuys.mongodb.net/myFirstDB?retryWrites=true&w=majority",
  () => console.log("Mongodb Connected"),
  (err) => console.log(`Error in connection ${err}`)
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// my app routes
app.use("/users", userRoutes);

const PORT = "5000";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
