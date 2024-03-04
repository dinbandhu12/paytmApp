const express = require("express");
const cors = require("cors");
// backend/routes/index.js
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

// use the router
app.use("/api/v1", rootRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})