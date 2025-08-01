const express = require("express");
const app = express();
require("dotenv").config();
const yaml = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = yaml.load("./swagger.yaml");
const connectDB = require("./db/connectDB");
const authRouter = require("./routes/auth");
const userDataRouter = require("./routes/userData");
const courseRouter = require("./routes/course");
const learningGroupRouter = require("./routes/learningGroup");
const storyRouter = require("./routes/story");
const notificationRouter = require("./routes/notification");
const commentRouter = require("./routes/comment");
const followRouter = require("./routes/follow");
const bookmarkRouter = require("./routes/bookmark");
const cartRouter = require("./routes/cart");
const userRouter = require("./routes/user");
const authenticationMiddleware = require("./middlewares/authenticationMiddleware");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.urlencoded({ extended: false })); //This parses the data and add it to the body.

app.use(express.json());

app.use(
  "/api/v1/students",
  courseRouter,
  userDataRouter,
  bookmarkRouter,
  cartRouter,
  authRouter,
  followRouter,
  commentRouter,
  learningGroupRouter,
  notificationRouter,
  storyRouter,
  userRouter
);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(5000, () => {
    console.log("server is listening at port 5000");
  });
};
start();
