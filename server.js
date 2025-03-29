const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");

require("dotenv").config();

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.use("/api/user", userRoute);
app.use("/api/task", taskRoute);

app.listen(port, () => console.log(`listening to port ${port}`));
