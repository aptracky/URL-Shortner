const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Define Routes
app.use('/', require('./routes/route-index'));
app.use('/api/url', require('./routes/route-url'));


connectDB();

app.listen(port, () => console.log(`Server running on port ${port}`));