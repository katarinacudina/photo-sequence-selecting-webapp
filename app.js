const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 3000;
const origin = "http://localhost:5000";

/**ROUTES **/
const userRouter = require("./routes/users/users.js");
const authRouter = require("./routes/auth/auth");
const imagesRouter = require("./routes/images/images");
const app = express();

/**SERVING STATIC FILES */

app.use(cors({ origin, credentials: true }));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/images", imagesRouter);

app.listen(port, () => console.log("App listening on port", port));
