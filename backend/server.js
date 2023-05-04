require("dotenv").config();
const Express = require("express");

// Importing Middleware
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// Importing Routes
const authRoute = require("./routes/auth");
const portfolioRoute = require("./routes/portfolio");

//DB
const Mongoose = require("mongoose");

//App
const app = Express();

// Using Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routing
app.use("/auth", authRoute);
app.use("/portfolios", portfolioRoute);

Mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(process.env.PORT || 3200, console.log("Server is Live"));
  })
  .catch((err) => console.log(err));
