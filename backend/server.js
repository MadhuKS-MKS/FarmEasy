const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");

const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

//Route files
const vendors = require("./routes/vendors");
const products = require("./routes/products");
const auth = require("./routes/auth");
const users = require("./routes/users");
const reviews = require("./routes/reviews");
const public = require("./routes/public");
const orderlist = require("./routes/orderlist");

//initialize app with express
const app = express();

//bodyparser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// File uploading
app.use(fileupload());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// // Enable CORS
app.use(cors());

//Mount routers
app.use("/api/v1/vendors", vendors);
app.use("/api/v1/products", products);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/reviews", reviews);
app.use("/api/v1/public", public);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`Server running  on port ${PORT}`));

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error :${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});

// const express = require("express");
// const connectDB = require("./config/db");
// // const path = require("path");

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(express.json());

// // Define Routes
// app.use("/api/users", require("./routes/users"));
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/products", require("./routes/products"));
// app.use("/api/category", require("./routes/category"));

// app.use("/api/vendors", require("./routes/vendors"));
// // app.use("/api/profile", require("./routes/profile"));

// // Serve static assets in production
// // if (process.env.NODE_ENV === "production") {
// // Set static folder
// //   app.use(express.static("client/build"));

// //   app.get("*", (req, res) =>
// //     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
// //   );
// // }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
