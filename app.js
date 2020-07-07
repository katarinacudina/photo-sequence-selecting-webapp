const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 3000;
const origin = "http://localhost:5000";
const userRouter = require("./routes/users/users.js");
const authRouter = require("./routes/auth/auth");

const app = express();
app.use(cors({ origin, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => console.log("App listening on port", port));
