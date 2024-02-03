const mongoose = require("mongoose");

const MongoURL = "mongodb://localhost:27017/Ecommerce-API";
mongoose.connect(MongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to mongodb server");
});
db.on("error", (err) => {
  console.log("MongoDB connection error !", err);
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
module.exports = db;
