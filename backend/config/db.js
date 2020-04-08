const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log(`Mongo Db connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
