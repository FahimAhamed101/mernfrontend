import express from "express";
import app from "./app/app.js";

//create the server
const PORT = process.env.PORT || 2030;
const app = express();
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
