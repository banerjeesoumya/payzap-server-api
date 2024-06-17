const express = require("express");
const v1Router = require("./routes/index");
const cors = require("cors")
const app = express();

require("dotenv").config()

app.use(cors());

app.use(express.json());

app.use("/api/v1", v1Router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

